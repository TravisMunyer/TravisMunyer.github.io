import React from 'react';

export default function Home() {
    return (
        <div>
            <h2>GitHub Profiles</h2>
            <ul className="no-bullets">
                <li>
                    This profile contains personal projects not related to work or academic projects. <br/>
                    <a href="https://github.com/TravisMunyer" target="_blank" rel="noopener noreferrer">
                        Personal
                    </a>
                </li>
                <li>
                    This GitHub profile contains some of my research work with UNO. <br/>
                    <a href="https://github.com/FOD-UNOmaha" target="_blank" rel="noopener noreferrer">
                        Research
                    </a>
                </li>
            </ul>
        </div>
    )
}