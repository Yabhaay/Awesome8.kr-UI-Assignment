import React from 'react';

import {
    Box,
    Typography
} from '@mui/material';

import backArrow from '../assets/back-arrow.svg';
import bell from '../assets/bell-icon.svg';

const Header = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
            <Box sx={{ cursor: 'pointer' }}>
                <img src={backArrow} alt="back" />
            </Box>
            <Box>
                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '-0.01em',
                    color: "#1D232B"
                }}>
                    자유톡
                </Typography>
            </Box>
            <Box sx={{ cursor: 'pointer' }}>
                <img src={bell} alt="bell" />
            </Box>
        </Box>
    )
}

export default Header;