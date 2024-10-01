import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">kakaraka</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">nie chcesz</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">haslo</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">get lost</label>
  </div>
  <button type="submit" class="btn btn-primary">susuususu   </button>
</form>
    </div>
  );
}

export default App;
