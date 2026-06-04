import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GraduationPage from './pages/GraduationPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/graduation" element={<GraduationPage />} />
        <Route path="*" element={<Navigate to="/graduation" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
