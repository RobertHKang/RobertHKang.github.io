import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Hey! 👋 My name is Robert Kang. I study CS + Math at The University of Michigan 〽️
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
      </header>
    </div>
  );
}

export default App;
