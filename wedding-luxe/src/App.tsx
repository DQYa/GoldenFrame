import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WeddingPage from './pages/WeddingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="*" element={<Navigate to="/wedding" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
