import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BabyPage from './pages/BabyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/baby" element={<BabyPage />} />
        <Route path="*" element={<Navigate to="/baby" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
