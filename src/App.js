import logo from './main.jpg';
import './App.css';

// Create the about text variable
var aboutText = "I am a PhD candidate at Drexel University School of Biomedical Engineering. I am advised by Dr. Kai Wang at the Children's Hospital of Philadelphia. I work on developing computational tools for human genome analysis. I received my B.A. in Biology with a minor in Computer Science from UNC-Chapel Hill in 2015. I also have previous experience in preclinical ultrasound imaging research at SonoVol, Inc. (now part of PerkinElmer)."

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        <u>Jonathan Elliot Perdomo</u>
        </p>
        <div class="image">
            <p className="About-section">
            <img src={logo} className="App-logo" alt="logo" />
            {aboutText}
            </p>
        </div>

        <p className="Personal-info">
            <b>Software and Publications</b><br/>
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
            <b>Contact info</b><br/>

            Email: <a
              className="App-link"
              href="mailto:jep353@drexel.edu"
              target="_blank"
              rel="noopener noreferrer"
                >
              jep353@drexel.edu
            </a>
            <br/>

            Twitter: <a
              className="App-link"
              href="https://twitter.com/jep353"
              target="_blank"
              rel="noopener noreferrer"
                >
              @jep353
            </a>
        </p>
      </header>
    </div>
  );
}

export default App;
