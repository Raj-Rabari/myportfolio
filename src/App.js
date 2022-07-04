import './App.css';
import { Header } from './shared/components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/homepage/Homepage';
import ProjectContainer from './pages/homepage/project/ProjectContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<ProjectContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
