import React from 'react'

class GifSearch extends React.Component {

    constructor() {
        super()

        this.state = {
            userInput: ""
        }
    }

    handleUserInputChange = event => {
        this.setState({
            userInput: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetch(this.state.userInput)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    id="userinput"
                    name="userinput"
                    type="text"
                    value={this.state.userInput}
                    onChange={event => this.handleUserInputChange(event)}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default GifSearch