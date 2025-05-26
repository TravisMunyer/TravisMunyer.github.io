import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../projects/Projects';

export default function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find(p => p.metadata.slug === slug);

    if (!project) return <div>Project not found</div>;

    const ProjectComponent = project.default;
    return (
        <div>
            <Link to="/projects"><button>Back to Projects</button></Link>
            <ProjectComponent />
        </div>
    );
}