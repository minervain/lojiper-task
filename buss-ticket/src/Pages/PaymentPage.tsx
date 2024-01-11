import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage: React.FC = (props) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const navigate=useNavigate();

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setPaymentSuccess(true);
        }, 2000);
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value);
    };

    const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpiryDate(e.target.value);
    };

    const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCvv(e.target.value);
    };

    const handleReturnHome = () => {
            navigate('/home')
    };

    return (
            <div className="max-w-md mx-auto p-4 bg-blue-300 rounded-md shadow-md absolute flex justify-center items-center ">
                <h2 className="text-2xl font-semibold mb-4">Payment Page</h2>
                {paymentSuccess ? (
                    <div>
                        <p className="text-green-600 mb-2">Ödeme Başarılı!</p>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                            onClick={handleReturnHome}
                        >
                            Anasayfaya dön
                        </button>
                    </div>
                ) : (
                    <div>
                        <form>
                            <label className="block mb-2">
                                Kart Numarası:
                                <input
                                    className="border px-2 py-1 w-full text-black"
                                    type="text"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                />
                            </label>
                            <label className="block mb-2">
                                Son Kullanma Tarihi:
                                <input
                                    className="border px-2 py-1 w-full text-black"
                                    type="text"
                                    value={expiryDate}
                                    onChange={handleExpiryDateChange}
                                />
                            </label>
                            <label className="block mb-2">
                                CVV:
                                <input
                                    className="border px-2 py-1 w-full text-black"
                                    type="text"
                                    value={cvv}
                                    onChange={handleCvvChange}
                                />
                            </label>
                            <button
                                className={`bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 ${isProcessing && 'opacity-50 cursor-not-allowed'
                                    }`}
                                type="button"
                                onClick={handlePayment}
                                disabled={isProcessing}
                            >
                                {isProcessing ? 'Ödeme İşleniyor...' : 'Ödeme Yap'}
                            </button>
                        </form>
                    </div>
                )}
            </div>
    );
};

export default PaymentPage;