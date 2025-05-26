# Travis Munyer | Machine Learning Projects Portfolio

This is a React + Vite web application showcasing machine learning and reinforcement learning projects by Travis Munyer. Each project page features dynamic SEO metadata, detailed writeups, and visualizations.

## Features

- **React + Vite**: Fast development with HMR and modern build tooling.
- **Project Portfolio**: Modular project pages loaded dynamically from `src/projects/`.
- **Dynamic SEO**: Each project provides custom meta tags for title, description, keywords, and social sharing.
- **Routing**: Uses `react-router-dom` for navigation between project pages.
- **Analytics**: Google Analytics 4 integration for pageview tracking.
- **Responsive Design**: Clean, accessible layout for all devices.

## Project Structure

- `src/projects/` — Individual project files (e.g., Lunar Lander, DeepRacer, Overcooked AI), each exporting a `metadata` object and a React component.
- `src/components/ProjectPage.jsx` — Loads and displays a project based on the URL slug, injecting SEO metadata.
- `src/projects/Projects.jsx` — Aggregates and sorts all projects for listing and lookup.
- `src/assets/projects/` — Project images and assets.

## Example Projects

- **🏁 DeepRacer**: Self-driving car with PPO in AWS DeepRacer.
- **🍲 Kitchen Execution**: Multi-agent RL in Overcooked AI.
- **🌙 Lunar Lander**: PPO for continuous control in Gymnasium’s Lunar Lander.

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Run the development server**
    ```
    npm run dev
    ```

3. **Push to GitHub Pages**
    ```
   npm run deploy
   ```