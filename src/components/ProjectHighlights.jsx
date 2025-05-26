import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../projects/Projects';
import ProjectCard from './ProjectCard';
import ReactGA from "react-ga4";

ReactGA.initialize('G-Q4JHKLZ907');

export default function ProjectHighlights() {
    ReactGA.send({ hitType: "pageview", page: "/projects" });

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