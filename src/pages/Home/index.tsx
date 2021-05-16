import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import s from './Home.module.scss';

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header />
            <Layout>
                <h1>
                    <b>Find</b> all your favourite <b>Pokemons</b>
                </h1>
                <p>You can know the type of Pokemon</p>
                <Button onClick={() => console.log('Click')}>See Pokemons</Button>
            </Layout>
        </div>
    );
};

export default HomePage;
