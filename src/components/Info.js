import React from 'react';

const Info = ({ligne_info}) => {

    if(ligne_info.index){
        return (
            <div className="info">
                <br/>
                <h1>Prêt à perfer {ligne_info.nom}???</h1>
                <br/>
                <h2>Index Actuel: {ligne_info.index}</h2>
                <p>Parcourt:{ligne_info.parcourt}</p>
                <p>depart:{ligne_info.depart}</p>
                <br/>
                <h2>{ligne_info.phrase}</h2>
            </div>
        );
    }

    
};

export default Info;