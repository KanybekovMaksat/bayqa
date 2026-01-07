import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maksat" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
