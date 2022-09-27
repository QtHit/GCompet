import React from 'react';
import Navigation from "../components/Navigation";
import GoUrl from "../components/GoUrl";

class LienNeuvic extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            url: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.setState({
            url: e.target.value
        })
    }

    render () {
        return <div className="lien">
            <Navigation/>
            <h1>Bienvenue sur GCompet!</h1>
            <br/>
            <label htmlFor="url">pour commencer, saisissez la fin de votre url ffgolf: </label>
            <input size="26" type="texte" id="non" name="url" value={this.state.url} onChange={this.handleChange}/>
            <GoUrl url={this.state.url}/>
        </div>
    }
}

export default LienNeuvic;