import React from 'react';
import Navigation from "../components/Navigation";
import GoPerso from "../components/GoPerso";

class LienPerso extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            url: '',
            sss: 72,
            slope: 113,
            par: 72
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name=e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    

    render () {
        return <div className='lien'>
            <Navigation/>
            <h1>Bienvenue sur GCompet!</h1>
            <br/>
            <label htmlFor="url">pour commencer, saisissez la fin de votre url ffgolf: </label>
            <input size="30" type="texte" id="non" name="url" value={this.state.url} onChange={this.handleChange}/>
            <br />
            <br/>
            <label htmlFor="sss">sss</label>
            <input size="1" type="int" id="sss" name="sss" value={this.state.sss} onChange={this.handleChange}/>
            <label htmlFor="slope">slope</label>
            <input size="1" type="int" id="slope" name="slope" value={this.state.slope} onChange={this.handleChange}/>
            <label htmlFor="par">par</label>
            <input size="1" type="int" id="par" name="par" value={this.state.par} onChange={this.handleChange}/>
            <GoPerso url={this.state.url} sss={this.state.sss} slope={this.state.slope} par={this.state.par}/>
        </div>
    }
}

export default LienPerso;