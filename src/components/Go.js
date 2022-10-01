import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ligne from './Ligne';
import Info from './Info';

const Go = ({ url, sss, slope, par, event }) => {
    const [data, setData] = useState([{patienter: "patienter"}]);
    const URL = "https://gcompetapi.osc-fr1.scalingo.io/perso/";
    // const URL = "http://localhost:5000/perso/";

    useEffect(() => {
        axios.get(URL + url + "/" + sss + "/" + slope + "/" + par).then(function (reponce) {
            setData(reponce.data)
        })
            .catch(function (error) {
                setData(null)
            })
    },[event])
        return (
            <div className='perso'>

                <div>
                    <Info key={"info"} ligne_info={data[0]} />
                </div>

                <br />
                <h2>Voiçi les variations de ton index en fonction de ton résultat à la prochaine compétition:</h2>
                <br />

                <table border="1">
                    <thead>
                        <tr>
                            <th>Score joué (SBA)</th>
                            <th>Score Différentiel</th>
                            <th>Nouvel Index</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((info, index) => (
                            <Ligne key={index} ligne_info={info} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

export default Go;