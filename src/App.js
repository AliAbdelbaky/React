import logo from './logo.svg';
import './App.css';
import PropsComponent from './components/Props';
import ClassProps from './components/ClassProps';
function App() {
  let name = 'ali'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PropsComponent name={name} age="22"/>
        <ClassProps name={name} age="22"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
