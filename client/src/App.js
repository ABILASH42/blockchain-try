import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/black-dashboard-react.scss';
import './assets/demo/demo.css';
import './assets/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

// Components
import ErrorBoundary from './components/common/ErrorBoundary';
import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';

// Pages
import Login from './pages/Login';
import RegisterBuyer from './pages/RegisterBuyer';
import RegisterSeller from './pages/RegisterSeller';
import Help from './pages/Help';

// Layouts
import AdminLayout from './layouts/Admin/Admin';
import LILayout from './layouts/Admin/LI';
import SellerLayout from './layouts/Admin/Seller';

function App() {
  return (
    <ErrorBoundary>
      <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register-buyer" element={<RegisterBuyer />} />
              <Route path="/register-seller" element={<RegisterSeller />} />
              <Route path="/help" element={<Help />} />
              <Route path="/admin/*" element={<AdminLayout />} />
              <Route path="/li/*" element={<LILayout />} />
              <Route path="/seller/*" element={<SellerLayout />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </BackgroundColorWrapper>
      </ThemeContextWrapper>
    </ErrorBoundary>
  );
}

export default App;