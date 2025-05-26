import React from 'react';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-Q4JHKLZ907');

export default function Contact() {
    ReactGA.send({ hitType: "pageview", page: "/contact" });

    return (
        <div className="content-page" style={{ textAlign: 'center', marginTop: '5vh' }}>
            <h2>Contact</h2>
            <p>
                Connect with me on{' '}
                <a
                    href="https://www.linkedin.com/in/travis-munyer/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                .
            </p>
        </div>
    );
}