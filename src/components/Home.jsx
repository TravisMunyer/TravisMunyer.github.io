import React from 'react';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-Q4JHKLZ907');

export default function Home() {
    ReactGA.send({ hitType: "pageview", page: "/home" });

    return (
        <h1>Welcome to my website!</h1>
    );
}