import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import InquiryPage from "../Pages/InquiryPage";
import PaymentPage from "../Pages/PaymentPage";
import Seferler from "../Pages/Seferler";

function RouterC() {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage   />} />
            <Route path="/" element={<SignupPage />} />
            <Route path="/inquiry/:departure/:arrival/:departureDate" element={<InquiryPage />} />
            <Route path="/seferler" element={<Seferler />} />
            <Route path="/payment/:id" element={<PaymentPage />} />
        </Routes>
    );
}

export default RouterC;
