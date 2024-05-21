import HomePage from './Components/HomePage';
import ProductPage from './Components/ProductPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App"> 
     <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
