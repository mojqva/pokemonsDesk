import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import s from './Home.module.scss';

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header />
            <Layout>
                <Heading type='h1'>
                    <b>Find</b> all your favourite <b>Pokemons</b>
                </Heading>
                <p>You can know the type of Pokemon</p>
                <Button width="normal" color="yellow" size="normal" onClick={() => console.log('Click')}>See Pokemons</Button>
                <Parallax />
            </Layout>
        </div>
    );
};

export default HomePage;
