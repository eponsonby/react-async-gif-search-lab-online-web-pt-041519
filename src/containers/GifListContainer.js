import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            gifs: []
        }
    }
    
    componentDidMount() {
        this.fetchGifs()
    }
    

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=h6kjZcziHySoKzW3uIwk9iJIJNLYXTSF&rating=g`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson.data)
                this.setState({
                    gifs: myJson.data.slice(0, 3)
                })
    })
}


    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetch={this.fetchGifs} />
            </div>
        )
    }
}

export default GifListContainer