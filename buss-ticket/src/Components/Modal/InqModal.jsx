import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

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
}

const shuffleArray = (array) => {
    // Implement Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const BasicModal = ({ bosKoltukSayisi }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatsLayout, setSeatsLayout] = useState([]);

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
        if (isSelected) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const generateBusSeats = () => {
        return seatsLayout.map((row, rowIndex) => (
            <Box key={rowIndex} sx={{ display: 'flex', justifyContent: 'center' }}>
                {row.map((seatNumber) => {
                    const isSeatSelected = selectedSeats.includes(seatNumber);
                    const seatStyle = {
                        cursor: 'pointer',
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
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Otobüs Koltuk Seçimi
                </Typography>
                <Box sx={{ mt: 2 }}>
                    {generateBusSeats()}
                </Box>
                <Typography sx={{ mt: 2 }}>
                    Seçilen Koltuklar: {selectedSeats.join(', ')}
                </Typography>
            </Box>
        </div>
    );
}

export default BasicModal;
