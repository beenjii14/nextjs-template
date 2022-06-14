import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/pages/home.module.scss';

const Home: NextPage = () => {
  return (
    <div data-testid="home-test-id" className={styles.container}>
      <Head>
        <title>NextJsTemplate</title>
        <meta name="description" content="NextJsTemplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>NextJsTemplate</h1>
    </div>
  );
};

export default Home;
