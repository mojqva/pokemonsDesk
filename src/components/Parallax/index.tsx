import React, { useEffect, useState } from 'react';

import SmallPokeballPng from './assets/PokeBall1.png';
import PokeballPng from './assets/Pokeball2.png';
import CloudPng from './assets/Vector.png';
import CloudBigPng from './assets/Vector1.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
    const [screenX, setScreenX] = useState(0);
    const [screenY, setScreenY] = useState(0);

    const mouseMove = (event: MouseEvent) => {
        setScreenX(event.screenX);
        setScreenY(event.screenY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        return window.removeEventListener('mousemove', mouseMove);
    }, [screenX, screenY]);

    return (
        <div>
            <div>
                <img src={SmallPokeballPng} alt="Pic" style={{ width: '260px' }} />
            </div>
            <div>
                <img src={PokeballPng} alt="Pic" />
            </div>
            <div>
                <img src={CloudPng} alt="Pic" />
            </div>
            <div>
                <img src={CloudBigPng} alt="Pic" />
            </div>
            <div>
                <img src={PikachuPng} alt="Pic" />
            </div>
        </div>
    );
};

export default Parallax;
