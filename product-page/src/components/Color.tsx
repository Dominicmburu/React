// import React from 'react';

type ColorValue = {
    color_1: string;
    color_2: string;
    color_3: string;
    color_4: string;
    color_5: string;
};

const Color = ({ color_1, color_2, color_3, color_4, color_5 }: ColorValue) => {
    return (
        <div className="color">
            <div className="pick" style={{ backgroundColor: color_1 }}></div>
            <div className="pick" style={{ backgroundColor: color_2 }}></div>
            <div className="pick" style={{ backgroundColor: color_3 }}></div>
            <div className="pick" style={{ backgroundColor: color_4 }}></div>
            <div className="pick" style={{ backgroundColor: color_5 }}></div>
        </div>
    );
};

export default Color;
