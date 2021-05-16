import React, { useEffect, useState } from 'react';

import SmallPokeballPng from './assets/PokeBall1.png';
import PokeballPng from './assets/Pokeball2.png';
import CloudPng from './assets/Vector.png';
import CloudBigPng from './assets/Vector1.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = ({ screenX, screenY }: MouseEvent) => {
        setX(screenX);
        setY(screenY);
    };
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            <div>
                <img
                    src={SmallPokeballPng}
                    alt="Pic"
                    style={{
                        transform: `translate(${x * 0.01}px , ${y * 0.01}px)`,
                    }}
                />
            </div>
            <div>
                <img
                    src={PokeballPng}
                    alt="Pic"
                    style={{
                        transform: `translate(${x * 0.02}px , ${y * 0.02}px)`,
                    }}
                />
            </div>
            <div>
                <img
                    src={CloudPng}
                    alt="Pic"
                    style={{
                        transform: `translate(${x * 0.03}px , ${y * 0.03}px)`,
                    }}
                />
            </div>
            <div>
                <img
                    src={CloudBigPng}
                    alt="Pic"
                    style={{
                        transform: `translate(${x * 0.04}px , ${y * 0.04}px)`,
                    }}
                />
            </div>
            <div>
                <img
                    src={PikachuPng}
                    alt="Pic"
                    style={{
                        transform: `translate(${x * 0.05}px , ${y * 0.05}px)`,
                    }}
                />
            </div>
        </div>
    );
};

export default Parallax;
