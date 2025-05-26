import React from 'react';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';

ReactGA.initialize('G-Q4JHKLZ907');

export default function Contact() {
    ReactGA.send({ hitType: "pageview", page: "/contact" });

    return (
        <div>
            <Helmet>
                <title>Travis Munyer | Contact</title>
                <meta name="description" content="Contact Travis Munyer via LinkedIn or other professional channels." />
                <meta name="keywords" content="Travis Munyer, Contact, LinkedIn, Software Engineer, Networking" />
            </Helmet>
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