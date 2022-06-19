import React from 'react'
import GoogleMap from'./GoogleMap'
import '../../App.css'
function Maps() {
    return (
        <div className="app-map">
        <p className="carbon-title"> Carbon Footprint In Your Local Area </p>
      <GoogleMap />
  
    </div>
    )
}

export default Maps
