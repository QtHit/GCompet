import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';


const PremierePage = () => {

    const [url, setUrl] = useState("XDFQZgQwVGMHZg9sVzA%3D");
    const navigate = useNavigate();

    const URL = "https://gcompetapi.osc-fr1.scalingo.io/";
    // const URL = "http://localhost:5000/";

    const handleClick = () => {
        axios.get(URL + "info/" + url).then(function (reponce) {
            if (reponce.data[0].nom){
                navigate("url/" + url)
                
            }
        })
            .catch(function (error) {
                console.log("null")
            })

        // 
    }


    return (
        <div className="lien">
            <br />
            <h1>Bienvenue sur GCompet!</h1>
            <br />
            <label htmlFor="url">pour commencer, saisissez la fin de votre url ffgolf: </label>
            <input size="26" type="texte" id="non" name="url" value={url} onChange={e => setUrl(e.target.value)} />
            <button onClick={handleClick}>Valider l'url</button>
            <br />
            <br />
            <h2>Veuillez saisir la partie qui se trouve APRES https://pages.ffgolf.org/histoindex/fiche/</h2>
            <h2>lorque vous allez dans votre espace, INDEX/VOIR MON HISTORIQUE D'INDEX</h2>
            <h2>Cela doit ressembler à: XDFQZgQwVGMHZg9sVzA%3D</h2>

        </div>
    )
}
export default PremierePage;