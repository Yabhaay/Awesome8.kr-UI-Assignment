import React from 'react';

import {
    Box,
    Typography,
    Avatar,
    TextField,
    InputAdornment,
    InputLabel,
    FormControl,
    OutlinedInput,

} from '@mui/material';

import ProfileOne from '../assets/profile-1.svg';
import Check from '../assets/check.svg';
import Menu from '../assets/menu.svg';
import Like from '../assets/heart.svg';
import Comment from '../assets/comment.svg';
import ProfileTwo from '../assets/profile-2.svg';
import ImgMode from '../assets/imagesmode.svg';

const Comments = () => {
    return (
        <React.Fragment>
            <Box>
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Avatar src={ProfileOne} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}>
                            <Typography color="#1D232B" sx={{ fontWeight: '700', fontSize: '14px', }}>
                                안녕 나 응애
                            </Typography>
                            <img src={Check} alt="check" />
                            <Typography color="#919EB6" sx={{ fontWeight: '500', fontSize: '10px' }}>
                                1일전
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <img src={Menu} alt="menu" />
                    </Box>
                </Box>
                <Box sx={{ mt: 2, marginLeft: '3rem' }}>
                    <Typography color="#313B49" sx={{ fontWeight: '400', fontSize: '12px' }}>
                        어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                        우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                        아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                        괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                        꼭 봐주세용~!
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={Like} alt="like" />
                            <Typography color='#919EB6'>5</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={Comment} alt="comment" />
                            <Typography color='#919EB6'>5</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '3rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Avatar src={ProfileTwo} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}>
                            <Typography color="#1D232B" sx={{ fontWeight: '700', fontSize: '14px', }}>
                                ㅇㅅㅇ
                            </Typography>
                            <Typography color="#919EB6" sx={{ fontWeight: '500', fontSize: '10px' }}>
                                1일전
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <img src={Menu} alt="menu" />
                    </Box>
                </Box>
                <Box sx={{ mt: 2, marginLeft: '6rem' }}>
                    <Typography color="#313B49" sx={{ fontWeight: '400', fontSize: '12px' }}>
                        어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                        우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                        아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                        괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                        꼭 봐주세용~!
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={Like} alt="like" />
                            <Typography color='#919EB6'>5</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <FormControl
                    fullWidth
                    sx={{
                        mt: 2,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#F7F8FA',

                            },
                            '&:hover fieldset': {
                                borderColor: '#F7F8FA',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#F7F8FA',
                            },
                        },
                    }}
                >
                    <OutlinedInput
                        placeholder='댓글을 남겨주세요.'
                        startAdornment={<InputAdornment position="start">
                            <img src={ImgMode} alt="" />
                        </InputAdornment>}
                        endAdornment={
                            <InputAdornment position="start">
                                등록
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
        </React.Fragment>
    )
}

export default Comments;