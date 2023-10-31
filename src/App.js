import './App.css';
import {BrowserRouter, Routes,Route  } from 'react-router-dom'
import Home from './component/Home';
import FrontPage from './component/FrontPage';
import Collection from './component/Collection';
import ShowPdf from './component/ShowPdf';

function App() {
  return (
    <div className="App " style={{ background: "#f0f9ff", height: "100%" }}>
  <BrowserRouter>
<Routes>
<Route path='/' element={<Home />}/>
<Route path='/frontpage' element={<FrontPage />}/>
<Route path='/view' element={<Collection />}/>
<Route path='/view/single/pdf/:id' element={<ShowPdf />}/>


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
