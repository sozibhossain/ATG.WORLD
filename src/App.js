import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Registration from './Pages/User/Registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
