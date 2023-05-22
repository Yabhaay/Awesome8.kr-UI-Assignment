import React from 'react';

import {
    Box,
    Card,
    CardHeader,
    Avatar,
    Button,
    Typography,
    CardContent,
    Chip
} from '@mui/material';

import ProfileOne from '../assets/profile-1.svg';
import Check from '../assets/check.svg';

const chip = [
    {
        id: 1,
        label: '2023',
    },
    {
        id: 2,
        label: 'TODAYISMONDAY',
    },
    {
        id: 3,
        label: 'Top',
    },
    {
        id: 4,
        label: 'POPS!',
    },
    {
        id: 5,
        label: 'Wow',
    },
    {
        id: 6,
        label: 'Row',
    },
]

const Body = () => {
    return (
        <Box>
            <Card elevation={0} sx={{ mt: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar src={ProfileOne} />
                    }
                    action={
                        <Button sx={{
                            background: '#01B99F',
                            padding: '6px 12px',
                            borderRadius: '999px',
                            color: '#fff',
                            fontWeight: '500',
                            fontSize: '12px',
                            '&:hover': {
                                background: '#01B99F',
                                color: '#fff'
                            }
                        }}>
                            팔로우
                        </Button>
                    }
                    title={
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}>
                            <Typography color="#1D232B" sx={{ fontWeight: '700', fontSize: '14px', }}>
                                안녕 나 응애
                            </Typography>
                            <img src={Check} alt="check" />
                            <Typography color="#919EB6" sx={{ fontWeight: '500', fontSize: '10px' }}>
                                1일전
                            </Typography>
                        </Box>
                    }
                    subheader={
                        <Typography color="#919EB6" sx={{ fontFamily: "Roboto", fontWeight: '400', fontSize: '12px' }}>
                            165cm • 53kg
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography mb={2} color="#1D232B" sx={{ fontWeight: '700', fontSize: '14px' }}>
                        지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
                    </Typography>

                    <Box>
                        <Typography mb={3} color="#313B49" sx={{ fontWeight: '500', fontSize: '12px' }}>
                            지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
                            혹시 어떤 상품이 제일 괜찮았어?
                        </Typography>

                        <Typography mb={3} color="#313B49" sx={{ fontWeight: '500', fontSize: '12px' }}>
                            후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
                            제일 재밌었다던데 맞아???
                        </Typography>

                        <Typography color="#313B49" sx={{ fontWeight: '500', fontSize: '12px' }}>
                            올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
                            아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
                            있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', mt: 2 }}>
                        {
                            chip.map((item) => (
                                <Chip key={item.id} sx={{ bgcolor: '#F7F8FA', border: '0.5px solid #CED3DE', color: '#5A6B87' }} label={`#${item.label}`} />
                            ))
                        }
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Body;