import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MultiStepForm from './pages/MultiStepForm';
import Result from './pages/Result';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultiStepForm/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
