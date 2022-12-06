import './App.css';
import PageContent from '../page-content/page-content';
import Header from '../header/header';
import About from '../about/about';
import OurBest from '../our-best/ourBest';
import CoffeeCard from '../coffee-cards/coffeeCards';
function App() {
  return (
    <div className="App">
      <div className='page'>
        <Header/>
        <PageContent/>
  
      </div>
      <div className='morePage'>
        <About></About>  
      </div>
      <div className='ourBestContent'>
        <OurBest>

        </OurBest>
        <CoffeeCard/>
        <CoffeeCard/>
        <CoffeeCard/>
      </div>  
    </div>
  );
}

export default App;
