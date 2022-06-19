import React from 'react'
import Carousel from "react-elastic-carousel";
import TakeActionSlider from './TakeActionSlider.js';
import Item from "./Item.js";
import MapItem from './MapItem.js';
import NewsItem from "./NewsItem.js"
import { Link } from 'react-router-dom';
import './App.css';
const breakPoints = [
  { width: 450, itemsToShow: 2 },
  { width: 450, itemsToShow: 2 },
  { width: 450, itemsToShow: 3 },
  ];
function Carousels() {
    return (

        <>
        <div className="App-Carousel">
       
          <Carousel breakPoints={breakPoints}>
            <NewsItem>
       
            <div >
            
               <Link to='/News' className='Carousels-Links'>  News </Link>
              <h4> 
                
              Here at Neo-Terra we believe it is time to
              </h4>
              <h4>
              share postive and insightful news 
              </h4>
              <h4>
              about climate change
              </h4>
             
           </div>
        
            </NewsItem>
            <Item >
          <div>
          <h1>
          <Link to='/CarbonFootprint' className='Carousels-Links'>  Carbon Calculator </Link>

          </h1>
              <h4> 
             Please take our carbon footprint calculator
              </h4>
              <h4>
               Lets change the world together, measure your carbon footprint
              </h4>
           </div>

            </Item>
            
            <TakeActionSlider >
            <div >
            
          <h1>
          <Link to='/Learn' className='Carousels-Links'>  Learn </Link>

          </h1>
              <h4> 
              Society needs to be more educated 
              </h4>
              <h4>
             and involved in climate change
              </h4>
              <h4>
              find out how you can get involved
              </h4>
             
           </div>
            </TakeActionSlider>

            <MapItem>
            <div>
          <h1>
          <Link to='/Maps' className='Carousels-Links'>  Maps </Link>
          </h1>
              <h4> 
              Society needs to be more educated 
              </h4>
              <h4>
             and involved in climate change
              </h4>
              <h4>
              find out how you can get involved
              </h4>
           </div>
            </MapItem>


         
          
         
     
          </Carousel>
       
        </div>
       
      </>
        
    )
}

export default Carousels
