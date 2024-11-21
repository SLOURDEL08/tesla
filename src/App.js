import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Banner from './Banner';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <Header />
        <Routes>
          {/* La Home page est directement à la racine */}
          <Route path="/" element={<Home />} />
          
          {/* Redirection des URLs non trouvées vers la Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;