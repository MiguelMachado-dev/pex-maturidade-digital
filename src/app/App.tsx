import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { AboutPage } from '../pages/AboutPage';
import { DiagnosticPage } from '../pages/DiagnosticPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ResultPage } from '../pages/ResultPage';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="diagnostico" element={<DiagnosticPage />} />
        <Route path="resultado" element={<ResultPage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
