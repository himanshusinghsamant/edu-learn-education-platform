import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { CoursesPage } from '../pages/CoursesPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HealthcarePage } from '../pages/HealthcarePage';
import { FinancePage } from '../pages/FinancePage';
import { TechnologyPage } from '../pages/TechnologyPage';
import { EnergyPage } from '../pages/EnergyPage';
import { GovernmentPage } from '../pages/GovernmentPage';
import { Layout } from '../components/Layout.js';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/energy" element={<EnergyPage />} />
        <Route path="/government" element={<GovernmentPage />} />
      </Route>
    </Routes>
  );
};
