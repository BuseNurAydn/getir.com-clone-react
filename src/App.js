
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import GetirSu from './pages/GetirSu/HomeSu';
import GetirBuyuk from './pages/GetirBuyuk/HomeBuyuk';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path='/buyuk/' element={<GetirBuyuk/>} />
        <Route path="/su/" element={<GetirSu/>}  />
      </Routes>
    </Router>
  );
}

export default App;
