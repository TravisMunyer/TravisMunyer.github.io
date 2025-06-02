import React from 'react';
import '../styles/Projects.css';

export default function ProjectCard({ metadata, onClick }) {
    return (
        <div className="project-card" onClick={onClick} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '1em' }}>
            <img src={metadata.image} alt={metadata.title} className="project-card__img" />
            <div>
                <h2 style={{margin: '0.5em'}}>{metadata.title}</h2>
            </div>
        </div>
    );
}