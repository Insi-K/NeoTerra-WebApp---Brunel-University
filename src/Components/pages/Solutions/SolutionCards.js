import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IPservice from '../.././../Components/pages/News Page/IPservice.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import './../../../Styles/SolutionCards.css';

function SolutionCards() {
    
  const backgroundImage = {
    backgroundImage : "url(/images/BlueLand.jpg)",
    height: "160vh",
    display: "flex",
    width :"100%",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};
// background image for solutions page

    const [Answers, setAnswers] = useState([]);
    const [IP, setIP] = useState(0);

    
    useEffect(() => {
        if(IP ===0 || IP === null) {
            IPservice.getIPaddress().then((response) => {setIP(response.data.ip)})
        }
    },[IP])

    useEffect(() => {
        if(IP ===0) {
            axios.get("http://localhost:8080/users/" + IP).then((response) => {setAnswers(response.data.answers)})
        }
    }, [IP, Answers])

    const useStyles = makeStyles({
        div:{
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'center',
            padding: '2rem'
        },
        root: {
          maxWidth: 405,
        },
        /* No longer used as now a SolutionCards.css handles the render and animation */
        btn:{
            padding: '10px 24px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '20px',
            fontColor:'white',
            borderBottom: "none",
            '&:hover': {
                fontColor:'white',
                textDecoration: 'none',
                borderBottom: "none"


              },
             
        },
        SolutionsTitle:{
          color:'white',
          fontFamily: 'sans-serif',
          fontWeight: '600',
        },
      });
     
      const ansRemapped = useState([]);
      
      useEffect(() => {
          if(IP ===0 || IP === null) {
              IPservice.getIPaddress().then((response) => {setIP(response.data.ip)})
          }
      },[IP])
  
      useEffect(() => {
          if(IP !==0) {
              axios.get("http://localhost:8080/users/" + IP).then((response) => {setAnswers(response.data.answers)})
          }
      }, [IP, Answers])
  
      var i;
      for (i = 0; i < 18; i++) { //Remapping Options Picked to their Actual Values in Units
  
          switch (i) {
  
              case 0: //Q1: Number of Members in the Household
                  switch (Answers[i]) { 
                      case 1:
                          ansRemapped.push(1);
                          break;
                      case 2:
                          ansRemapped.push(3);
                          break;
                      case 3:
                          ansRemapped.push(6);
                          break;
                      case 4:
                          ansRemapped.push(8);
                          break;
                  
                      default:
                          break;
                  }
                  break;
              
              case 1: //Q2: Type of House
                  ansRemapped.push(Answers[i]);
                  break;
              
              case 2: //Q3: Number of Cars in the Household
                  switch (Answers[i]) { 
                      case 1: 
                          ansRemapped.push(0);
                          break;
                      case 2:
                          ansRemapped.push(2);
                          break;
                      case 3:
                          ansRemapped.push(4);
                          break;
                      case 4:
                          ansRemapped.push(6);
                          break;
                  
                      default:
                          break;
                  }
                  break;
  
              case 3: //Q4: Type of Car
                  ansRemapped.push(Answers[i]);
                  break;
  
              case 4: //Q5: Car's Annual Mileage
                  switch (Answers[i]) { 
                      case 1: 
                          ansRemapped.push(6000);
                          break;
                      case 2:
                          ansRemapped.push(9000);
                          break;
                      case 3:
                          ansRemapped.push(12000);
                          break;
                  
                      default:
                          break;
                  }
                  break;
              
              case 5: //Q6: How much of the food that you eat is organic?
                  ansRemapped.push(Answers[i]);
                  break;
  
              case 6: //Q7: Meat/ Dairy Eaten
                  ansRemapped.push(Answers[i]);
                  break;
  
              case 7: //Q8: Locally Produced Food
                  ansRemapped.push(Answers[i]);
                  break;
  
              case 8: //Q9: Packed/processed Food
                  ansRemapped.push(Answers[i]);
                  break;
              
              case 9: //Q10: Composting
                  ansRemapped.push(Answers[i]);
                  break;
  
              case 10: //Q11: Waste Food
                  ansRemapped.push(Answers[i]);
                  break;
              
              case 11: //Q12: Bus Time (Weekly)
                  switch (Answers[i]) { 
                      case 1: 
                          ansRemapped.push(0);
                          break;
                      case 2:
                          ansRemapped.push(0.5);
                          break;
                      case 3:
                          ansRemapped.push(1.5);
                          break;
                      case 4:
                          ansRemapped.push(2.5);
                          break;
                  
                      default:
                          break;
                  }
                  break;
  
              case 12: //Q13: Train Time (Weekly)
                  switch (Answers[i]) { 
                      case 1: 
                          ansRemapped.push(0);
                          break;
                      case 2:
                          ansRemapped.push(0.5);
                          break;
                      case 3:
                          ansRemapped.push(1.5);
                          break;
                      case 4:
                          ansRemapped.push(2.5);
                          break;
                  
                      default:
                          break;
                  }
                  break;
  
              case 13: //Q14: Number of Flights
                  switch (Answers[i]) { 
                      case 1: 
                          ansRemapped.push(0);
                          break;
                      case 2:
                          ansRemapped.push(2);
                          break;
                      case 3:
                          ansRemapped.push(5);
                          break;
                      case 4:
                          ansRemapped.push(10);
                          break;
                  
                      default:
                          break;
                  }
                  break;
  
              case 14: //Q15: Flight Time
                  switch (Answers[i]) { 
                      case 1: 
                          ansRemapped.push(3);
                          break;
                      case 2:
                          ansRemapped.push(5);
                          break;
                      case 3:
                          ansRemapped.push(8);
                          break;
                      case 4:
                          ansRemapped.push(10);
                          break;
                  
                      default:
                          break;
                  }
                  break;
  
              case 15: //Q16: Misc Spending
                  ansRemapped.push(Answers[i]);
                  break;
              
              case 16: //Q17: Recycle Paper
                  ansRemapped.push(Answers[i]);
                  break;
              
              case 17: //Q18: Recycle Plastic
                  ansRemapped.push(Answers[i]);
                  break;
          
              default:
                  break;
          }
  
      }
    //This is the area where all the Solutions would be Presented
    //The code below is for when a User has answered that their household owns a car
    const classes = useStyles()

    return (
        <div style={backgroundImage}>
            <div className={classes.div}>
                {/* Card 1*/}
                <h1 className={classes.SolutionsTitle}> Solutions</h1>  
                {/*Here useStyles are utilized instead of a css files*/}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/images/EV.jpg"
                        //images
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Buy an Electic car
                            </Typography>
                            <Typography variant="body2" component="p">
                            CO2 Emissions Prevented: {(ansRemapped[6] * 169.4).toFixed(2)} grams <br/>
                            Annual Fuel Savings: £{((0.3 * ansRemapped[6]) * 0.12).toFixed(2)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br/>

                {/* Card 2*/}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/images/plant.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Compost Your Waste
                            </Typography>
                            <Typography variant="body2" c component="p">
                            CO2 Emissions Prevented: {(29500 /ansRemapped[10]).toFixed(2)} grams
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br/>
          
                {/* Card 3*/}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/images/recycle.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Buy from Charity/ Thrift Shops
                            </Typography>
                            <Typography variant="body2" component="p">
                            CO2 Emissions Prevented: {(15000 /ansRemapped[15]).toFixed(2)} grams
                            <br/>
                            Annual Savings Made: £{(ansRemapped[15] * 210).toFixed(2)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br/>
                    {/* Card 4*/}
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/images/vegetarianplate.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Going vegetarian
                            </Typography>
                            <Typography variant="body2" component="p">
                            CO2 Emissions Prevented: {(15000 /ansRemapped[15]).toFixed(2)} grams
                            <br/>
                            Annual Savings Made: £{(ansRemapped[15] * 210).toFixed(2)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br/>
                {/* Card 5*/}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/images/Renewable-Energy.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Renewable energy
                            </Typography>
                            <Typography variant="body2" component="p">
                            CO2 Emissions Prevented: {(15000 /ansRemapped[15]).toFixed(2)} grams
                            <br/>
                            Annual Savings Made: £{(ansRemapped[15] * 210).toFixed(2)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br/>
                {/* Removed button div and instead developed btn animation through css */}
               <Link to="/Learn" className="return-btn"> Continue To Website</Link> 
            </div>
        </div>
    )
}

export default SolutionCards
