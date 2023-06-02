import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import './App.css'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className='navbar-brand'>React Assignment</span>
            <Link className='nav-link' to="/">Page 1</Link>
            <Link className='nav-link' to="/page2">Page 2</Link>
      </nav>
      <div className='container' style={{marginTop:20}}>
        <Routes>
          <Route exact path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
