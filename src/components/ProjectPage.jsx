import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../projects/Projects';
import { Helmet } from 'react-helmet-async';

export default function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find(p => p.metadata.slug === slug);

    if (!project) return <div>Project not found</div>;

    const ProjectComponent = project.default;
    return (
        <div>
            <Helmet>
                <title>{project.metadata.title ? `Travis Munyer | ${project.metadata.title}` : 'Travis Munyer | Project'}</title>
                {project.metadata.description && (
                    <meta name="description" content={project.metadata.description} />
                )}
                {project.metadata.keywords && (
                    <meta name="keywords" content={project.metadata.keywords} />
                )}
                {project.metadata.title && (
                    <meta property="og:title" content={project.metadata.title} />
                )}
                {project.metadata.description && (
                    <meta property="og:description" content={project.metadata.description} />
                )}
                {project.metadata.image && (
                    <meta property="og:image" content={project.metadata.image} />
                )}
            </Helmet>

            <Link to="/projects"><button>Back to Projects</button></Link>
            <ProjectComponent />
        </div>
    );
}