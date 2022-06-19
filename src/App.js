import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  Home  from './Components/pages/Home';
import Article_1 from './Components/pages/Learn Page/Article-CC_in_nature';
import News from './Components/pages/News Page/News';
import CarbonFootprint from './Components/pages/CF calculator/CarbonFootprint';
import Quiz from './Components/pages/Quiz';
import About from './Components/pages/About';
import ThanksForSubscribing from './Components/pages/ThanksForSubscribing';
import Article_2 from './Components/pages/Learn Page/Article-CC_in_society';
import Admin from './Components/pages/News Page/Admin';
import Article_3 from './Components/pages/Learn Page/Article-Ways_to_reduce'
import ScrollToTop from './Components/pages/Learn Page/ScrollToTop';
import SolutionCards from './Components/pages/Solutions/SolutionCards'
import TermsOfUse from './Components/pages/TermsOfUse';
import CookiesPolicy from './Components/pages/CookiesPolicy';
function App() {
  return (
  <Router>
    <ScrollToTop>
    
      <Route path='/' exact component={Home} />
      <Route path='/Learn' exact component={Article_1} />
      <Route path='/LearnPageTwo' exact component={Article_2} />
      <Route path='/LearnPageThree' exact component={Article_3}/>
      <Route path='/News' exact component={News} />
      <Route path='/CarbonFootprint' exact component={CarbonFootprint} />
      <Route path='/Quiz' exact component={Quiz} />
      <Route path='/About' exact component={About} />
      <Route path='/ThanksForSubscribing' exact component={ThanksForSubscribing} />
      <Route path='/Admin' exact component={Admin} />
      <Route path='/SolutionCards' exact component={SolutionCards} />
      <Route path='/TermsOfUse' exact component={TermsOfUse} />
      <Route path='/CookiesPolicy' exact component={CookiesPolicy} />
    </ScrollToTop>
      
  </Router>
  );
}

export default App;