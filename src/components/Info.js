import React from 'react';

const Info = ({ligne_info}) => {

    if(ligne_info.patienter){
        return(
            <div className="info">
                <h1>Chargement des infos</h1>
            </div>
        )
    }
    else{
        return (
            <div className="info">
                <br/>
                <h1>Prêt à perfer {ligne_info.nom}???</h1>
                <br/>
                <h2>Index Actuel: {ligne_info.index}</h2>
                <br/>
                <p>{ligne_info.phrase}</p>
            </div>
        );
    }

};

export default Info;