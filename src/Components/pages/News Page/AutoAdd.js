import axios from 'axios';
import React from 'react';
//import '../.././../Styles/App.css';
//Temporarily Commented this import, it causes conflict with another css file

//Code Developed and Implemented by David in Admin.js originally

function AutoAdd() {
    
    const requestNews = (site) =>
    {
        axios.post('http://localhost:8080/autoNews?newsSite='+site)
        .then((response) => {
            console.log(response.data);});
    }

    return (
        
        <div>
            <form>
                <label>What website would you like to fetch news from?</label>
                <button onClick={() => requestNews("bbc")} >Generate BBC news</button>
                <button onClick={() => requestNews("nyt")} >Generate New York Times news</button>
            </form>
            
        </div>
        
    )
}

export default AutoAdd