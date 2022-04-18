import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}


function Btn (){
  const res = () => {
    return 'Log In';
  }
  return <button>{res()}</button>
}

class Fields extends Component{
    render(){
      const holder ="Enter here";
      return <input placeholder={holder} type='text' />
    }
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Fields/>
      <Btn/>
    </div>
  );
}

export default App;
