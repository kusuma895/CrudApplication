// import logo from './logo.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import AddEdit from './components/AddEdit';
import View from './components/View';
function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center"/>
      <Router>
        <Routes>
          <Route path='/' element={<Homes/>}/>
          <Route path='/addedit' element={<AddEdit/>}/>
          <Route path='/update/:id' element={<AddEdit/>}/>
          <Route path='/view/:id' element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;