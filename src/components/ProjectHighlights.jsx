import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../projects/Projects';
import ProjectCard from './ProjectCard';

export default function ProjectHighlights() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Project Highlights</h2>
            {projects.map((proj) => (
                <ProjectCard
                    key={proj.metadata.title}
                    metadata={proj.metadata}
                    onClick={() => navigate('/projects/' + proj.metadata.slug)}
                />
            ))}
        </div>
    );
}