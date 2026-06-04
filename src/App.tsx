import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GraduationPage from './templates/graduation/pages/GraduationPage';
import YouthBookPage from './templates/youthbook/pages/GraduationPage';
import WeddingPage from './templates/wedding/pages/WeddingPage';
import BabyPage from './templates/baby/pages/BabyPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graduation" element={<GraduationPage />} />
        <Route path="/youthbook" element={<YouthBookPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/baby" element={<BabyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
