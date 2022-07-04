import './App.css';
import { Header } from './shared/components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
