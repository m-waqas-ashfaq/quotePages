import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AddQuote } from './Pages/AddQuote';
import { CustomCoverage } from './Pages/customCoverage/CustomCoverage';
import { LandingPage } from './Pages/LandingPage';
import { Nav } from './component/Nav'
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/LandingPage' element={<LandingPage />} />
          <Route path='/CustomCoverage' element={<CustomCoverage />} />
          <Route path='/AddQuote' element={<AddQuote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;