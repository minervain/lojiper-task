import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import PaymentPage from '../../Pages/PaymentPage';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'white',
    border: 'none',
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const BasicModal = ({ bosKoltukSayisi, fiyat }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatsLayout, setSeatsLayout] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const totalSeats = 40;
        const emptySeats = Array.from({ length: totalSeats - bosKoltukSayisi }, (_, index) => index + 1);
        const shuffledSeats = shuffleArray(emptySeats);
        const layout = [];

        for (let i = 0; i < bosKoltukSayisi; i += 2) {
            const row = shuffledSeats.slice(i, i + 2);
            layout.push(row);
        }

        setSeatsLayout(layout);
    }, [bosKoltukSayisi]);

    const handleSeatClick = (seatNumber) => {
        const isSelected = selectedSeats.includes(seatNumber);

        if (!isSelected && selectedSeats.length === 5) {
            return;
        }

        const updatedSelectedSeats = isSelected
            ? selectedSeats.filter((seat) => seat !== seatNumber)
            : [...selectedSeats, seatNumber];

        setSelectedSeats(updatedSelectedSeats);

        const updatedTotalPrice = updatedSelectedSeats.length * fiyat;
        setTotalPrice(updatedTotalPrice);
    };

    const handlePayment = () => {
        setShow(!show)
    }

    const generateBusSeats = () => {
        return seatsLayout.map((row, rowIndex) => (
            <Box key={rowIndex} sx={{ display: 'flex', justifyContent: 'center' }}>
                {row.map((seatNumber) => {
                    const isSeatSelected = selectedSeats.includes(seatNumber);
                    const seatStyle = {
                        cursor: isSeatSelected || selectedSeats.length === 5 ? 'not-allowed' : 'pointer',
                        width: '30px',
                        height: '30px',
                        margin: '5px',
                        backgroundColor: isSeatSelected ? 'red' : 'green',
                        color: 'white',
                        textAlign: 'center',
                        lineHeight: '30px',
                    };

                    return (
                        <div
                            key={seatNumber}
                            style={seatStyle}
                            onClick={() => handleSeatClick(seatNumber)}
                        >
                            {seatNumber}
                        </div>
                    );
                })}
            </Box>
        ));
    };

    return (
        <div>
            <Box sx={{ ...style, backgroundColor: "#D23B38" }}>
                <Typography variant="h6" component="h2" style={{ textAlign: 'center' }}>
                    Otobüs Koltuk Seçimi
                </Typography>
                {show ? <PaymentPage /> : ""}

                <Box sx={{ mt: 2 }}>
                    {generateBusSeats()}
                </Box>
                <Typography sx={{ mt: 2 }}>
                    Seçilen Koltuklar: {selectedSeats.join(', ')}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Toplam Fiyat: {totalPrice} TL
                </Typography>
                <Button variant='contained' onClick={handlePayment} > Ödeme yap</Button>
               
            </Box>

        </div>

    );
}

export default BasicModal;