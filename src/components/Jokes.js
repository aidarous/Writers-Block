import React, { Component } from 'react'
import axios from 'axios';


class Jokes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    async getJokes() {
            const result = await axios.get("https://official-joke-api.appspot.com/random_ten")
            const randomSetup = result.data[0].setup
            const punchlineOne = result.data[0].punchline
            
            
            this.setState({
                setup1: randomSetup,
                punchline1: punchlineOne
            })
        }
    componentDidMount () {
        this.getJokes();
    }
    render() {
        return (
            <div>
                <h1>Jokes</h1>
                <h2>{this.state.setup1}</h2>
                <p> {this.state.punchline1}</p>
               

            </div>
        )
    }
}

export default Jokes;
