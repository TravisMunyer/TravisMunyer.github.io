import React from 'react';
import ReactGA from 'react-ga4';
import { ReactTyped } from "react-typed";

ReactGA.initialize('G-Q4JHKLZ907');

const roles = [
    "Engineer",
    "Data Scientist",
    "Researcher",
    "Mentor",
    "AI Enthusiast"
];

export default function Home() {
    ReactGA.send({ hitType: "pageview", page: "/home" });

    return (
        <div style={{ textAlign: 'center' }}>
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