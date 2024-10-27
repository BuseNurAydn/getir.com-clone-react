
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import GetirSu from './pages/GetirSu/HomeSu';
import GetirBuyuk from './pages/GetirBuyuk/HomeBuyuk';
import GetirCarsi from './pages/GetirCarsi/HomeCarsi';
import GetirYemek from './pages/GetirYemek/HomeYemek'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path='/yemek/' element={<GetirYemek/>} />
        <Route path='/buyuk/' element={<GetirBuyuk/>} />
        <Route path="/su/" element={<GetirSu/>}  />
        <Route path='/carsi/' element={<GetirCarsi/>} />
      </Routes>
    </Router>
  );
}

export default App;
