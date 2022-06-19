import axios from 'axios';
import React from 'react';
class AddStory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            storyTitle: '',
            storyLink: '',
            source: ''

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/news', this.state)
    }

    render() {

        const {storyTitle, storyLink, source} = this.state

        return (
            <div>
                <form onSubmit = {this.submitHandler} >

                
                <input type = "text" name = "storyTitle" value = {storyTitle} placeholder = "Story Title" onChange = {this.changeHandler} />
                

                 
                <input type = "text" name = "storyLink" value = {storyLink} placeholder = "Story Link" onChange = {this.changeHandler} />
                

                
                <input type = "text" name = "source" value = {source} placeholder = "Story Source" onChange = {this.changeHandler} />
                
                
                <button type = "submit">Add Story</button>
                </form>

            </div>

            

        )

    }

    
}

export default AddStory