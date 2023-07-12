import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css';
import Homepage from './pages/Homepage.js';
import Header from './components/Header.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route element={<Homepage/>} path="/"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
