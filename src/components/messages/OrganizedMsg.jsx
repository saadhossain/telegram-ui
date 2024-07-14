import React from 'react';

const OrganizedMsg = ({ msg }) => {
    return msg?.split('\n').map((line, lineIndex) => {
        const parts = line.split(/(\[\[\d+\]\]\(https?:\/\/[^\s]+\))/g);
        return (
            <div key={lineIndex}>
                {parts.map((part, partIndex) => {
                    const match = part.match(/\[\[(\d+)\]\]\((https?:\/\/[^\s]+)\)/);
                    if (match) {
                        const url = match[2];
                        return (
                            <a key={partIndex} href={url} target="_blank" rel="noopener noreferrer" className='text-primary hover:underline'>
                                {url}
                            </a>
                        );
                    }
                    return <span key={partIndex}>{part}</span>;
                })}
            </div>
        );
    });
};

export default OrganizedMsg;