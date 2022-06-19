import React from 'react'
//As the style is now handled by CarbonFootprint.css I thought this was irrelevant.
//import '../../../Styles/Solutions.css'

const Solutions = (props) => {
    const  HandleSolutions =()=>{
        
        if (props.finalScore  > 10 ){
            return window.location.href = "/SolutionCards";
        } else{
            return window.location.href = "/SolutionCards";
        }
    }
    return (
        /* 
            Removed div container as it was irrelevant,
            as it returns a single element.
         */
        <button onClick={HandleSolutions} className='Solutions-btn'> Solutions </button>
    )
}

export default Solutions
