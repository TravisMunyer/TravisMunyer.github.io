import React from 'react';
import ReactGA from 'react-ga4';
import { ReactTyped } from "react-typed";
import { Helmet } from 'react-helmet-async';

ReactGA.initialize('G-Q4JHKLZ907');

const roles = [
    "Software Engineer",
    "Data Scientist",
    "Researcher",
    "Mentor",
    "AI Enthusiast"
];

export default function Home() {
    ReactGA.send({ hitType: "pageview", page: "/home" });

    return (
        <div style={{ textAlign: 'center' }}>
            <Helmet>
                <title>Travis Munyer | Home</title>
                <meta name="description" content="Welcome to the homepage of Travis Munyer: Software Engineer, Data Scientist, Researcher, Mentor, and AI Enthusiast." />
                <meta name="keywords" content="Travis Munyer, Home, Software Engineer, Data Scientist, Researcher, Mentor, AI Enthusiast" />
            </Helmet>
            <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>Meet Travis.</h1>
            <ReactTyped
                strings={roles}
                typeSpeed={60}
                backSpeed={40}
                backDelay={1500}
                loop
                showCursor
                cursorChar="|"
                style={{ fontSize: '2em', color: '#555' }}
            />
        </div>
    );
}