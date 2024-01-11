import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React, { useEffect, useState } from 'react';

export default function AlertSuccess({ message }) {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={() => setOpen(false)}
        >
            <Alert severity="error" sx={{ width: '100%' }}>
                {message || 'Eksik ya da yanlış bilgi girdiniz'}
            </Alert>
        </Snackbar>
    );
}
