import logo from './main.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Jonathan Elliot Perdomo
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="About-section">
        I am a current PhD student at Drexel University in the Biomedical Sciences program, where I study motor control in Drosophila. Previously, I worked at SonoVol, Inc. developing an automated software platform for 3D ultrasound acquisitions. My research interests are in systems neuroscience, as well as in graph theory and shape analysis.
        </p>

        <p className="Contact-info">
            <b>Publications</b><br/>
            See <a
              className="App-link"
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=CJ1ahuoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
                >
              Google Scholar
            </a>
        </p>

        <p className="Contact-info">
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

            GitHub: <a
              className="App-link"
              href="https://github.com/jonperdomo"
              target="_blank"
              rel="noopener noreferrer"
                >
              jonperdomo
            </a><br/>


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