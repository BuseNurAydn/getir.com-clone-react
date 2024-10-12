
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import GetirSu from './pages/GetirSu/HomeSu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/su/" element={<GetirSu/>}  />
      </Routes>
    </Router>
  );
}

export default App;
