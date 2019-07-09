import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import InView from '../components/InView';

const Health = dynamic(import('../components/Health'));


const Home = () => (
  <>
    <Header />
    <div className="container">
      <Hero />
      <Cards />
      <InView>
        <Health />
      </InView>
    </div>
  </>
);

Home.getInitialProps = ({ req }) => req.client;

export default Home;
