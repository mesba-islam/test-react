import logo from './logo.svg';
import './App.css';
// import TestValue from './components/FunctionComponent.js';
import Classcomponent from './components/ClassComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <TestValue value= 'test value 1' name = '1st'/>
        <TestValue value= 'test value 2' name = '2nd'/>
        <TestValue value= 'test value 3' name = '3rd'/> */}

        <Classcomponent/>
      
        
      </header>
      
    </div>
  );
}

export default App;
