import logo from './main.jpg';
import './App.css';

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
            I am a PhD student at Drexel University studying motor control in Drosophila. I received my undergraduate at UNC-Chapel Hill and later worked at SonoVol, Inc. developing an automated software platform for 3D ultrasound acquisitions. My research focuses on developing computational tools for bioinformatics/genomics.
            </p>
        </div>
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
