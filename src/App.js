import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import Detail from './Component/Detail'
import Error from './Component/Error';
function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<Detail/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  </Router>
  </>

  );
}

export default App;
