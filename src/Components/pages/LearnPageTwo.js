import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import './LearnPageTwo.css'
import { cyan } from '@material-ui/core/colors';


function LearnPageTwo() {

  const useStyles = makeStyles((theme) => ({
      

    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 2fr)',
      gridGap: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(15),
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
      paddingTop: theme.spacing(7),
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
      height: theme.spacing(8),
      borderRadius: 25,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      
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

  const Infrastructure = {
    backgroundImage : "url(/images/infrastructure.jpg)",
    height: "500px",
    width:"900px",

  };

  const Economy= {
    backgroundImage : "url(/images/economy.jpg)",
    height: "500px",
    width:"900px",

  };

  const Water={
    backgroundImage : "url(/images/water.jpg)",
    height: "500px",
     width:"900px",
  }


  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
      <div className ="gradientBox">
        
        <div style={Leaf}>
                <h1 className="TitleLearn">
                    What are the effects of climate<br/> change in society?
                    <br/>
                    <h4 className="Subheading">
                    Climate change is affecting people in far-reaching ways. Impacts related to<br></br>climate change are evident across regions and in many sectors
                    <br></br>important to society—such as human health, agriculture and food security,
                    <br></br> water supply, transportation, and others—and are expected to become increasingly
                    <br></br>disruptive throughout this century and beyond.
                    </h4>
                </h1>
        </div>
      </div>
      </Typography>

            {/*Mid Section for Fact box */}
      
            <div className={classes.divider}>
          <h2 className="MidSubtitle">
         In this article we will take a look at the main consequences of climate change on people and the society we live in:
         </h2>
      <div className={classes.paper2}>
       <Paper className={classes.factBox} elevation={10}>
         <Box m="2" p={1}>
          <Typography variant="subtitle1">
            <h1 className="Fact"><b><i>Fact: </i></b>There's more carbon dioxide in our atmosphere than any time in human history
           
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
          <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Health</i></b></h1>
            <h5 className="boxText">The same fossil fuel emissions that contribute to the greenhouse effect can also lead to
              <br></br> cardiovascular and respiratory diseases such as asthma particularly among the elderly.
              <br></br> It is estimated air pollution kills 7 million people worldwide every year
              <br></br>according to the World Health Organisation. Between 2030 and 2050 climate change
              <br></br> is expected to cause 250000 additional deaths per year from malnutrition and heat stress.
              {/*Second para*/}
              <br></br>
              
              <br></br>Warmer temperatures are linked to a 2 percent increase in mental health issues such as stress,
              <br></br> anxiety and PTSD. Changes in climate change strongly affect water borne diseases and increases 
              <br></br> the transmissions of disease through insects. Malaria kills over 400000 people a year.

              {/*Third para*/}
              <br></br>

              <br></br> The number of weather-related disasters from 2007 to 2016 increased by 46% when compared with 
              <br></br> the average for 1990 to 1999. Despite this rise the number of deaths caused by natural
              <br></br> disasters did not increase.  However, between 1990 and 2016 these disasters affected 4.8 billion
              <br></br> people in Asia and killing 500000 people.
         
            </h5>
          </Paper>
        </div>
        <div >
          <Paper className={classes.paper2}><div style={Infrastructure}></div></Paper>
        </div>
      </div>  

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper3}><div style={Economy}></div></Paper>
        </div>
        <div >
       {/* <Paper className={classes.paper2}> */}
        <Paper className={classes.paper3}>
          <h1 className="boxTitle"><b><i>Economy</i></b></h1>
          <h5 className="boxText">Warmer temperatures, higher sea levels and extreme weather will damage property and critical infrastructure 
          <br></br> and negatively impact sectors such as: agriculture, forestry, fisheries and tourism. According to Morgan Stanley climate disasters have caused North America $415 billion in the last three years and leaving millions of lives in poverty. The world bank is warning that if we don’t do something immediately climate cause 100 million people into poverty.

          {/*Second Para*/}
          <br></br>
          <br></br>Heatwaves make us less able to work and reduce productivity. Insurance firms would have to raise premiums to cover rising costs from extreme weather. This would make insurance too expensive for most people.
          <br></br>
          <br></br>Efforts to stop climate change would create many jobs. Agricultural yields are sensitive to weather conditions as our climate becomes more extreme this will result in a reduction of crop yields in areas where food production is vital.

          <br></br>
          <br></br>Climate change will affect tourism. A warming climate and changes to precipitation patterns will decrease the number of days when recreational snow activities that can take place.

          <br></br>
          <br></br>The accumulation of carbon dioxide is changing the compositions of fruit and vegetables making the less nutritious. The extra carbon dioxide is speeding up photosynthesis which produces more sugar and less, calcium, zinc and important vitamins. As a result, this will lead to many more people developing a zinc or protein deficiency. 
          </h5>
          </Paper>
        
        </div>
      </div>  

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div>
          <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Water</i></b></h1>
            <h5 className="boxText">Climate change also disrupts the water cycle and precipitation, leading to more intense droughts.
            <br></br> As a result, the water supply decreases as the demand increase as population continues to grow.
              {/*Second para*/}
              <br></br>
              
              <br></br>Water quality will suffer in areas experiencing a large amount of rainfall. Heavy rain downpours 
              <br></br>can increase the number of pollutants, animal waste, trash and other materials that would make
              <br></br>the water unsafe or in need of water treatment.

              {/*Third para*/}
              <br></br>

              <br></br> Hydroelectric plants will be unable to function from the higher temperatures as this decreases 
              <br></br> the water present in lakes and rivers. Overgrown algae occur from the increased pollution. <br></br>This makes treating the water a strenuous task.
         
            </h5>
          </Paper>
        </div>
        <div >
          <Paper className={classes.paper2}><div style={Water}></div></Paper>
        </div>
      </div>  


      </div>
    );


  }
export default LearnPageTwo