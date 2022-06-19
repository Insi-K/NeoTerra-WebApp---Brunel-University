import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import './LearnPageThree.css'
import { cyan } from '@material-ui/core/colors';

function LearnPageThree() {

  const useStyles = makeStyles((theme) => ({
      

    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 2fr)',
      gridGap: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(15),
      paddingTop: theme.spacing(13),
      paddingBottom: theme.spacing(5),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
      
      
    },
    paper2: {
      height:'1h',
      display: 'flex',
      justifyContent: 'center',
      alignitems: 'center',
      width: '2h',
      paddingTop: theme.spacing(5),
    },

    paper3: {
      padding: theme.spacing(10),
      justifyContent: 'center',
      alignitems: 'center',
      marginLeft: theme.spacing(1),
    },


    factBox:{
      backgroundColor: cyan[100],
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(10),
      borderRadius: 25,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      marginBottom: theme.spacing(5),
      
    },

    divider: {
      margin: theme.spacing(0, 1),
    },
    

   
  
  }));

  {/* IMAGES */}
  const classes = useStyles();

  const Leaf = {
    backgroundImage : "url(/images/leafsprout.jpg",
    height: "700px",
    width:"1900px",
  };

  const Facepalm = {
    backgroundImage : "url(/images/breakdown.png",
    height: "500px",
    width:"900px",
  };

  const EV= {
    backgroundImage : "url(/images/EV.jpg)",
    height: "500px",
    width:"900px",

  };

  const Plane= {
    backgroundImage : "url(/images/plane.jpg)",
    height: "500px",
    width:"900px",

  };

  const Recycle= {
    backgroundImage : "url(/images/recycle.jpg)",
    height: "500px",
    width:"900px",

  };
  
  const RecycleEnergy =  {
    backgroundImage : "url(/images/recycleenergy.jpg)",
    height: "500px",
    width:"900px",

  };


  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
      <div className ="gradientBox">
        <div style={Leaf}>
                  <h1 className="TitleLearn">
                      Ways you can help to reduce<br/> climate change?
                      <br/>
                      <h4 className="Subheading">
                      A new report published in September 2018, the world’s leading climate
                      <br></br> scientists made their starkest warning so far: our current actions are not
                      <br></br>enough for us to meet our target of 1.5C of warming. We need to do more.
                      
                      </h4>
                      
                      </h1>
        </div>
      </div>
      </Typography>

            {/*Mid Section for Fact box */}
      
            <div className={classes.divider}>
          <h2 className="MidSubtitle">
         In this article we will discuss the steps you should take in order to help this ever-growing battle:
         </h2>
      <div className={classes.paper2}>
       <Paper className={classes.factBox} elevation={10}>
         <Box m="2" p={1}>
          <Typography variant="subtitle1">
            <h1 className="Fact"><b><i>Fact: </i></b>Ecosystems perform an important role in climate regulation. Nowadays it is known
            <br></br> that they absorb around half of C02 emissions produced by humans. 
           
            </h1>
          </Typography>
        </Box>
       </Paper>
     </div>
     
     </div>
    
    {/*1st Box*/}
    <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div>
          <Paper className={classes.paper3}>
          <h1 className="boxTitle"><b><i>Consume less meat and dairy</i></b></h1>
            <h5 className="boxText">Industrial meat is the biggest cause of deforestation globally. Farmers deliberately cause 
            <br></br>forest fires to clear space for cattle ranching. New research shows that without meat and 
            <br></br>dairy consumption, global farmland use could be reduced by more than 75% – an area
            <br></br>equivalent to the US, China, European Union and Australia combined and still feed the world.
            <br></br>
            <br></br>Things you can try:
             
              <ul> 
                <li>Notice how many meals you eat with meat and cut that by 25%. Try to buy local produce
                <br></br>as this cut carbon dioxide emissions from transportation, preservation and prolonged refrigeration.</li>
                <br></br>
                <li>High fibre, plant-based diets are also better for your health.</li>
                <br></br>
                <li>Make fresh fruits and vegetables a bigger part of your diet.</li>
                <br></br>
                <li>Buy sustainable or organic fresh produce whenever possible.</li>
                <br></br>
                <li>Eat all your food and reduce waste</li>
              </ul>

            </h5>
          </Paper>
        </div>
        <div >
          <Paper className={classes.paper2}><div style={Facepalm}></div></Paper>
        </div>
      </div>  

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper3}><div style={EV}></div></Paper>
        </div>
        <div >
       {/* <Paper className={classes.paper2}> */}
        <Paper className={classes.paper3}>
          <h1 className="boxTitle"><b><i>Change your car habits</i></b></h1>
            <h5 className="boxText">Private transport is one of the world’s biggest sources of greenhouse gases, with emissions rising every year. Cars and trucks emit around 24 pounds of carbon dioxide and other gases per gallon. Particulate matter such as tiny particles of soot, smoke, dust or allergens is released into the air as a result of transportation.
            <br></br>
            <br></br>Things you can try:
             
             <ul> 
               <br></br>
               <li>When possible take public transportation, bike or walk your destination.</li>
               <br></br>
               <li>When it is time to replace your vehicle consider changing to an electric or petrol smart car. You can also try car sharing schemes.</li>
               <br></br>
               <li>If you have to use your care make sure tyres are fully pumped and oxygen sensors are in good order.</li>
              </ul>
            </h5>
          </Paper>
        </div>
      </div>  


      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div>
          <Paper className={classes.paper3}>
          <h1 className="boxTitle"><b><i>Change your flying habits</i></b></h1>
            <h5 className="boxText">Emissions from flights stay in the atmosphere for several centuries. This is because the emissions
            <br></br> are released high into the atmosphere triggering chemical reactions and atmospheric effects 
            <br></br>that heat the planet. 
            <br></br>
            <br></br>Things you can try:
             
              <ul> 
                <br></br>
                <li>Consider taking holidays closer to home or urge your company to set up virtual business trips </li>
                <br></br>
                <li>For trips within the same country or continent take the train.</li>
                <br></br>
                <li>When flying is unavoidable pay a little extra for carbon offsetting. <a target="_blank" href="https://www.myclimate.org/carbon-offset/"><i>myClimate</i></a> compares carbon emissions of flights</li>
               </ul>

            </h5>
          </Paper>
        </div>
        <div >
          <Paper className={classes.paper2}><div style={Plane}></div></Paper>
        </div>
      </div>  

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper3}><div style={Recycle}></div></Paper>
        </div>
        <div >
       {/* <Paper className={classes.paper2}> */}
        <Paper className={classes.paper3}>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="boxTitle"><b><i>Stay clear of fast fashion</i></b></h1>
            <h5 className="boxText">The clothing sector is responsible for 3% of the world carbon dioxide emissions either in the way it is produced or how it is transported. 
            <br></br>
            <br></br>Things you can try:
             
             <ul> 
               <br></br>
               <li>To help combat this invest in higher quality clothing that will last.</li>
               <br></br>
               <li>You can also shop at second-hand shops or swap clothes with family and friends instead of buying new ones.</li>
               
              </ul>
            </h5>
          </Paper>
        </div>
      </div>  

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div>
          <Paper className={classes.paper3}>
          <h1 className="boxTitle"><b><i>Know that your changes make a real impact</i></b></h1>
            <h5 className="boxText">
            Talk to your friends and family, and make sure your representatives are making good
            <br></br>decisions. Join a social movement that focuses on environmental activities Youth
            <br></br> Strike 4 Climate.
            <br></br>
            <br></br>Things you can do right now:
             
             <ul> 
               <br></br>
               <li>Power your home with renewable energy</li>
               <br></br>
               <li>Invest in energy efficient appliances </li>
               <br></br>
               <li>Reduce water waste</li>
               <br></br>
               <li>Buy LED lightbulbs</li>
               <br></br>
               <li>Unplug rarely used devices</li>
              </ul>
            </h5>
          </Paper>
        </div>
        <div >
          <Paper className={classes.paper2}><div style={RecycleEnergy}></div></Paper>
        </div>
      </div>  


      </div>
    );


  }
export default LearnPageThree