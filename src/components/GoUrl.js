import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Ligne from './Ligne';
import Info from './Info';

const GoUrl = ({url}) => {

    const [data, setData]= useState([]);

    useEffect(() => {
        axios.get("https://gcompetapi.osc-fr1.scalingo.io/go/"+url).then(function(reponce){
            setData(reponce.data)
        })
        .catch(function(error){
            setData(null)
        })
    },[url])

    if (url===""){
        return(
            <div>
                <br/>
                <br/>
                <h2>Veuillez saisir la partie qui se trouve APRES https://pages.ffgolf.org/histoindex/fiche/</h2>
                <h2>lorque vous allez dans votre espace, INDEX/VOIR MON HISTORIQUE D'INDEX</h2>
                <h2>Cela doit ressembler à: XDFQZgQwVGMHZg9sVzA%3D</h2>
            </div>
        );
    }
    else if (data===null){
        return(
            <div>
                <br/>
                <br/>
                <h1>Url incorrecte</h1>
                <h2>Veuillez saisir la partie qui se trouve APRES https://pages.ffgolf.org/histoindex/fiche/</h2>
                <h2>lorque vous allez dans votre espace, INDEX/VOIR MON HISTORIQUE D'INDEX</h2>
                <h2>Cela doit ressembler à: XDFQZgQwVGMHZg9sVzA%3D</h2>
            </div>
        );}

    else{
    return (
        
        
        <div className='perso'>

            <div>
                <Info key={"info"} ligne_info={data[0]}/>
            </div>

            <br/>
            <h2>Voiçi les variations de ton index en fonction de ton résultat à la prochaine compétition:</h2>
            <br/>

            <table border="1">
                <thead>
                    <tr>
                        <th>Score joué (SBA)</th>                        
                        <th>Score Différentiel</th>
                        <th>Nouvel Index</th>
                    </tr>                    
                </thead>
                <tbody>
                    {data.map((info,index)=>(
                            <Ligne key={index} ligne_info={info}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
};}

export default GoUrl;