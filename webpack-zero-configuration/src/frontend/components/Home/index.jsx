import React from 'react';
import styles from './Home.scss';

const Home = ({ name }) => <h1 className={styles.Home}>Hello {name || 'World'}</h1>;

export default Home;
