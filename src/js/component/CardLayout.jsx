import Card from "./Card";
import React, { useState, useEffect } from 'react';

function CardLayout() {

    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="row gap-3 justify-content-center p-5">
            <Card>
                <i className="fa-regular fa-clock"></i>
            </Card>
            <Card unit={Math.floor(seconds / 100000) % 10} />
            <Card unit={Math.floor(seconds / 10000) % 10} />
            <Card unit={Math.floor(seconds / 1000) % 10} />
            <Card unit={Math.floor(seconds / 100) % 10} />
            <Card unit={Math.floor(seconds / 10) % 10} />
            <Card unit={seconds % 10} />
        </div >
    );
};

export default CardLayout;