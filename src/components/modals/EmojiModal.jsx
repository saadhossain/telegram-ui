import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const EmojiModal = ({ id, emojiAnchorEl, handleClose, open }) => {
    const [emojiData, setEmojiData] = useState(null);

    useEffect(() => {
        const fetchEmojiData = async () => {
            try {
                const response = await fetch('/emojiData.json');
                const data = await response.json();
                setEmojiData(data);
            } catch (error) {
                console.error('Error fetching emoji data:', error);
            }
        };

        fetchEmojiData();
    }, []);

    function getEmojiFromUnicode(unicode) {
        const parts = unicode.split('-');
        const codePoints = parts.map(part => parseInt(part, 16));
        return String.fromCodePoint(...codePoints);
    }

    return (
        <div>
            <Popover
                id={id}
                sx={{
                    marginTop: '-50px',
                    marginLeft: '30px',
                    width: '600px',
                    height: '300px',
                    '@media (max-width:600px)': {
                        width: '360px'
                    },
                }}
                open={open}
                anchorEl={emojiAnchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handleClose}
            >
                <Typography sx={{ p: 1 }}>
                    {emojiData && Object.keys(emojiData).map(key => (
                        <span key={key} style={{ marginRight: '5px' }}>
                            {getEmojiFromUnicode(emojiData[key].output.replace(/-/g, '-'))}
                        </span>
                    ))}
                </Typography>
            </Popover>
        </div>
    );
};

export default EmojiModal;