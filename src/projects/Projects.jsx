const modules = import.meta.glob('./*.jsx', { eager: true });
export const projects = Object.values(modules);