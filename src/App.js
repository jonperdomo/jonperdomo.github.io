import logo from './main.jpg';
import Widget from './Widget';
import './App.css';

// Create the about text variable
var aboutText = "Post-doctoral researcher at the University of Pittsburgh in the Department of Biomedical Informatics. I completed my Ph.D. in Biomedical Science from Drexel University, advised by Dr. Kai Wang at the Children's Hospital of Philadelphia, supported by an NIH NRSA F31 fellowship. My research focuses on developing computational tools for human genome analysis. As an undergraduate at UNC-Chapel Hill, I obtained a B.A. in Biology and a minor in Computer Science. Previous experience includes preclinical ultrasound imaging research at SonoVol, Inc. (now part of PerkinElmer).";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        <u>Jonathan Elliot Perdomo</u>
        </p>
        <div className="About-section">
            <p>
            <img src={logo} className="App-logo" alt="logo" />
            {aboutText}
            </p>
        </div>

        <p className="Personal-info">
            <u>Software and Publications</u><br/>
            GitHub Profile: <a
              className="App-link"
              href="https://github.com/jonperdomo"
              target="_blank"
              rel="noopener noreferrer"
                >
              jonperdomo
            </a>
            <br/>

            Publications: <a
              className="App-link"
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=CJ1ahuoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
                >
              Google Scholar
            </a>
        </p>

        <p className="Personal-info">
            <u>Contact info</u><br/>

            Email: <a
              className="App-link"
              href="mailto:jep386@pitt.edu"
              target="_blank"
              rel="noopener noreferrer"
                >
              jep386@pitt.edu
            </a>
            <br/>

            LinkedIn: <a
              className="App-link"
              href="https://www.linkedin.com/in/jonperdomo/"
              target="_blank"
              rel="noopener noreferrer"
                >
              jonperdomo
            </a>
            <br/>
        </p>
        <Widget />
      </header>
    </div>
  );
}

export default App;
