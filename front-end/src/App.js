import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Homepage from './pages/Homepage';
import Gallery from './pages/Gallery';
import Pokemon from './pages/Pokemon';

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/gallery/:zoom" element={<Gallery />} />
          <Route path="/pokemon/:pokename" element={<Pokemon />} />
        </Routes>
      </Router>
    </>
  );
}
