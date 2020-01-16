import React from 'react'

class GifList extends React.Component {
    
    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => <img src={gif.images.original.url}/>)}
            </ul>
            )
    }

}

export default GifList