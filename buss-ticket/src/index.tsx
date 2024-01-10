import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './router'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import InquiryPage from './Pages/InquiryPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />

    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SignupPage />} />
      <Route path="/inquiry/:departure/:arrival/:departureDate" element={<InquiryPage />} />

    </Routes>
  </BrowserRouter>
);

