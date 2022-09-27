import React from 'react';

const Ligne = ({ligne_info}) => {

    if(!ligne_info.nom){
        return (
            <tr className='ligne'>
                <td>{ligne_info.score}</td>
                <td>{ligne_info.diff}</td>
                <td>{ligne_info.nouvel_index}</td>
            </tr>
        );
    }

    
};

export default Ligne;