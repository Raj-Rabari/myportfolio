import './App.css';
import { Header } from './Components/Header';
import { Homepage } from './Components/Homepage';
import ProjectContainer from './Components/ProjectContainer';
import Skills from './Components/Skills';
import "bootstrap/dist/css/bootstrap.css"
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
        <Header />
        <Homepage/>
        <ProjectContainer/>
        <Skills/>
        <Contact/>
    </div>
  );
}

export default App;
