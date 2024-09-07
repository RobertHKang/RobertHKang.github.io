import logo from './logo.svg';
import './App.css';
import HomePage from './homePage';

function App() {
  return (
    <div className="App">        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      {/* <header className="App-header">
        <p>
          Hey! 👋 My name is Robert Kang. I study CS + Math @ The University of Michigan 〽️
        </p>
        <a
          className="App-link"
          href="https://github.com/rokanq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://linkedin.com/in/r-kang"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="/RobertKang_resume.pdf"
 
          download="RobertKang_resume.pdf"
        >
          Resume
        </a>
      </header> */}
      <HomePage/>
    </div>
  );
}

export default App;
