import React from 'react';
import Sky from './Sky';
import Ground from './Ground'

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    const containerStyle = {
        paddingTop: '60px',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    };
    return (
        <div style={containerStyle}>
            <svg
                id="aliens-go-home-canvas"
                preserveAspectRatio="xMaxYMax none"
                viewBox={viewBox}
            >
                <Sky />
                <Ground />
                <circle cx={0} cy={0} r={50} />
            </svg>
        </div>
    );
};

export default Canvas;