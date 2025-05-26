import React from "react";
import image from "../assets/projects/LunarLander.png";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-Q4JHKLZ907');

export const metadata = {
    title: "🌙 Landing on the Moon: An Exploration of PPO",
    image,
    slug: "lunar-lander",
    order: 3
};

export default function LunarLander() {
    ReactGA.send({ hitType: "pageview", page: "/projects/${metadata.slug}" });

    return (
        <section
            id="lunar-lander-project"
            className="content-page"
        >
            <h2>🌙 Landing on the Moon: An Exploration of PPO</h2>
            <p><strong>Travis Munyer – Georgia Tech | 2025</strong></p>

            <p>
                This project explores the use of Proximal Policy Optimization (PPO) in solving the Lunar Lander Continuous environment from the Gymnasium library.
                The agent must land a spacecraft between two flags with precision, balancing fuel efficiency, control stability, and safety.
                This benchmark environment presents a meaningful testbed for modern reinforcement learning (RL) algorithms due to its continuous action space,
                sparse rewards, and optional stochastic dynamics like wind and turbulence.
            </p>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src={image}
                    alt="Lunar Lander PPO"
                    style={{ maxWidth: "100%", borderRadius: "12px" }}
                />
                <p style={{ fontStyle: "italic" }}>Trained agent landing successfully using PPO in the continuous environment</p>
            </div>

            <h3>Methodology</h3>
            <p>
                The project implements PPO, an actor-critic method that combines policy and value learning with clipping for stable updates and Generalized Advantage Estimation (GAE) for variance reduction.
                A core focus of the project is the <strong>systematic tuning of PPO’s hyperparameters</strong>, including:
            </p>
            <ul>
                <li>Clip epsilon (update trust region)</li>
                <li>Discount factor gamma</li>
                <li>GAE lambda</li>
                <li>Learning rates for policy and value networks</li>
                <li>Number of update epochs per sample batch</li>
            </ul>
            <p>
                Each parameter was tested across a carefully selected range of values with evaluation setups designed to balance computational efficiency and training stability.
                Final training used the best-performing parameters to solve both the <strong>default environment</strong> and a <strong>more difficult variant</strong> with added wind and turbulence.
            </p>

            <h3>Results</h3>
            <ul>
                <li><strong>Default Environment:</strong> PPO agent converged with an average reward above 270 (threshold for success is 200).</li>
                <li><strong>Windy Environment:</strong> The tuned PPO setup generalized well and achieved an average reward of around 254 despite stochastic disturbances.</li>
            </ul>
            <p>
                Visualizations during training and inference showed smooth convergence in the default environment and more variable performance under wind,
                reflecting the stochasticity of the harder scenario.
            </p>

            <h3>Advantages</h3>
            <ul>
                <li>PPO’s clipping and GAE made training stable across settings</li>
                <li>Continuous action space enabled more realistic control strategies</li>
                <li>Systematic parameter tuning improved robustness and insight</li>
            </ul>

            <h3>Limitations</h3>
            <ul>
                <li>Implementation required careful debugging, especially around GAE</li>
                <li>Wind introduced noise, occasionally causing unstable convergence</li>
                <li>Learning rate decay and normalization did not produce expected improvements</li>
            </ul>

            <h3>Future Work</h3>
            <ul>
                <li>Compare PPO against algorithms like SAC or TD3 for continuous control</li>
                <li>Use curriculum learning to improve generalization from harder scenarios</li>
                <li>Explore more effective learning rate schedules and normalization techniques</li>
                <li>Introduce reward shaping for fuel efficiency and trajectory safety</li>
            </ul>
        </section>
    );
};
