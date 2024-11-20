import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;