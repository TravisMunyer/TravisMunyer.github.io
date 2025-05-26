const modules = import.meta.glob('./*.jsx', { eager: true });
const projectsArr = Object.values(modules);

export const projects = projectsArr.sort(
    (a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0)
);