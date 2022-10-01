import React, { useEffect, useState } from 'react';
import Go from "../components/Go";
import { useLocation } from "react-router-dom";
import axios from 'axios';


const GoPage = () => {

    const { pathname } = useLocation()
    const [infos, setInfos] = useState([]);
    const [sss, setSSS] = useState(71.8);
    const [slope, setSlope] = useState(144);
    const [par, setPar] = useState(72);
    const [homme, setHomme] = useState(true);
    const [femme, setFemme] = useState(false);
    const [departBlanc, setDepartBlanc] = useState(false);
    const [departJaune, setDepartJaune] = useState(false);
    const [departBleu, setDepartBleu] = useState(false);
    const [departRouge, setDepartRouge] = useState(false);
    const [golfPerso, setGolfPerso] = useState(true);
    const [event, setEvent] = useState(0);

    const URL = "https://gcompetapi.osc-fr1.scalingo.io/";
    // const URL = "http://localhost:5000/";

    useEffect(() => {
        axios.get(URL + "info/" + pathname.replace("/url/", "")).then(function (reponce) {
            setInfos(reponce.data)
            if (reponce.data[0].sexe !='M.'){
                setHomme(false)
                setFemme(true)
            }
            if (reponce.data[0].golf ==='GOLF DE NEUVIC '){
                console.log("ici")

                if (reponce.data[0].couleurDepart ==='Rouge'){
                handleRouge();
                }
                if (reponce.data[0].couleurDepart ==='Bleu'){
                handleBleu();
                }
                if (reponce.data[0].couleurDepart ==='Jaune'){
                handleJaune();
                }
                if (reponce.data[0].couleurDepart ==='Blanc'){
                handleBlanc();
                }
            }
        })
            .catch(function (error) {
                setInfos(null)
            })
        
    },[])

    useEffect(() => {
        if (slope >= 55 && slope < 155 && sss !== 0 && par !== 0 && Math.abs(sss - par) < 20) {
            setEvent(event + 1)
        }


    }, [sss, slope, par])

    useEffect(() => {
        if (departBlanc){
            handleBlanc()
        }
        if (departJaune){
            handleJaune()
        }
        if (departBleu){
            handleBleu()
        }
        if (departRouge){
            handleRouge()
        }

    }, [homme, femme])

    

    const handlePerso = () => {
        setGolfPerso(true);
        setDepartBlanc(false);
        setDepartJaune(false);
        setDepartBleu(false);
        setDepartRouge(false);
    };

    const handleBlanc = () => {
        setGolfPerso(false);
        setDepartBlanc(true);
        setDepartJaune(false);
        setDepartBleu(false);
        setDepartRouge(false);
        if (homme) {
            setSSS(69);
            setSlope(140);
            setPar(70);
        }
        else {
            setSSS(73.4);
            setSlope(143);
            setPar(70);
        }

    };

    const handleJaune = () => {
        setGolfPerso(false);
        setDepartBlanc(false);
        setDepartJaune(true);
        setDepartBleu(false);
        setDepartRouge(false);

        if (homme) {
            setSSS(68);
            setSlope(125);
            setPar(70);
        }
        else {
            setSSS(72.4);
            setSlope(138);
            setPar(70);
        }
    };

    const handleBleu = () => {
        setGolfPerso(false);
        setDepartBlanc(false);
        setDepartJaune(false);
        setDepartBleu(true);
        setDepartRouge(false);

        if (homme) {
            setSSS(66.5);
            setSlope(120);
            setPar(70);
        }
        else {
            setSSS(71);
            setSlope(133);
            setPar(70);
        }
    };

    const handleRouge = () => {
        setGolfPerso(false);
        setDepartBlanc(false);
        setDepartJaune(false);
        setDepartBleu(false);
        setDepartRouge(true);
        if (homme) {
            setSSS(65.4);
            setSlope(112);
            setPar(70);
        }
        else {
            setSSS(70);
            setSlope(130);
            setPar(70);
        }
    };

    const handleHomme = () => {
        setHomme(true);
        setFemme(false);
    };

    const handleFemme = () => {
        setHomme(false);
        setFemme(true);
    };

    return <div>
        <br />
        <h1>GCompet!</h1>
        <p>(tu peux ajouter cette page aux favoris pour ne plus avoir à chercher ton url)</p>
        <br />
        <label>
            <input
                type="checkbox"
                checked={homme}
                onChange={handleHomme}
            />
            <></>Homme<>   </>
        </label>
        <label>
            <input
                type="checkbox"
                checked={femme}
                onChange={handleFemme}
            />
            <></>Femme<>   </>
        </label>
        <br />
        <br />
        <label>
            <></>Golf de Neuvic :<>   </>
        </label>
        <br />
        <label>
            <input
                type="checkbox"
                checked={departBlanc}
                onChange={handleBlanc}
            />
            <></>Blanc<>   </>
        </label>
        <label>
            <input
                type="checkbox"
                checked={departJaune}
                onChange={handleJaune}
            />
            <></>Jaune<>   </>
        </label>
        <label>
            <input
                type="checkbox"
                checked={departBleu}
                onChange={handleBleu}
            />
            <></>Bleu<>   </>
        </label>
        <label>
            <input
                type="checkbox"
                checked={departRouge}
                onChange={handleRouge}
            />
            <></>Rouge<>   </>
        </label>
        <br /><br />
        <label>
            <input
                type="checkbox"
                checked={golfPerso}
                onChange={handlePerso}
            />
            <></>Golf personalisé :<>   </>
        </label>
        <label htmlFor="sss">sss</label>
        <input size="1" type="int" id="sss" name="sss" value={sss} onChange={e => { setSSS(e.target.value); handlePerso() }} />
        <label htmlFor="slope">slope</label>
        <input size="1" type="int" id="slope" name="slope" value={slope} onChange={e => { setSlope(e.target.value); handlePerso() }} />
        <label htmlFor="par">par</label>
        <input size="1" type="int" id="par" name="par" value={par} onChange={e => { setPar(e.target.value); handlePerso() }} />
        <br />
        <Go url={pathname.replace("/url/", "")} sss={sss} slope={slope} par={par} event={event} />

    </div>

}

export default GoPage;