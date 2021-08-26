import logo from './logo.svg';
import './App.css';
import Page from "./routes/Page";
import {useRouter} from "./contexts/useRouterContext";
import {PAGES} from "./routes/routes";

function App() {
    const { push, back } = useRouter()
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
              <button onClick={() => back()}>back</button>
              <button onClick={() => push(PAGES.HOME)}>home</button>
              <button onClick={() => push(PAGES.ABOUT)}>about</button>
              <button onClick={() => push(PAGES.QUESTION1)}>quest 1</button>
              <button onClick={() => push(PAGES.QUESTION2)}>quest 2</button>
          </nav>
          <Page />
      </header>
    </div>
  );
}

export default App;
