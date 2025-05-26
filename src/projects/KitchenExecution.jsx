import React from "react";
import image from "../assets/projects/CookImage.png";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-Q4JHKLZ907');

export const metadata = {
    title: "🍲 Kitchen Execution with Multiple Chefs",
    image,
    slug: "kitchen-execution",
    order: 2,
    description: "Cooperative multi-agent reinforcement learning in Overcooked AI: PPO with shared reward/value, results, and future work.",
    keywords: "Travis Munyer, Kitchen Execution, Multi-Agent RL, Overcooked AI, PPO, Machine Learning, Research"
};

export default function KitchenExecution() {
    ReactGA.send({ hitType: "pageview", page: "/projects/${metadata.slug}" });

    return (
        <section
            id="marl-kitchen-project"
            className="content-page"
        >
            <h2>🍲 Kitchen Execution with Multiple Chefs</h2>
            <p><strong>Travis Munyer – Georgia Tech | 2025</strong></p>

            <p>
                This project explores cooperative multi-agent reinforcement learning (MARL) in the Overcooked AI environment.
                Two agents (chefs) must collaborate to prepare and deliver soups efficiently across three progressively difficult layouts.
                The base reinforcement learning algorithm used is Proximal Policy Optimization (PPO), which was extended to include both a <strong>shared reward</strong> and a <strong>shared value network</strong>.
            </p>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src="/assets/projects/videos/marl_circuit_demo_coop.gif"
                    alt="Multi-agent kitchen collaboration demo"
                    style={{ maxWidth: "100%", borderRadius: "12px" }}
                />
                <p style={{ fontStyle: "italic" }}>Example of learned passing strategy in the circuit layout</p>
            </div>

            <h3>Methodology</h3>
            <p>
                Standard PPO was modified to better suit the multi-agent cooperative scenario. Each agent had an independent policy network but both shared a centralized critic (value function).
                The reward at each timestep was calculated as the sum of individual shaped rewards and twice the sparse soup reward. This incentivized actions that contributed to overall success,
                even if they were suboptimal for the individual agent. Training was conducted in parallelized environments using PyTorch for efficient sample collection and convergence.
            </p>

            <p>
                Policies were trained on three layouts: <strong>Cramped</strong>, <strong>Coord</strong>, and <strong>Circuit</strong>. These range from simple spaces that can be solved individually to more complex scenarios that require strong coordination,
                such as passing onions across counters to reduce travel.
            </p>

            <h3>Results</h3>
            <ul>
                <li><strong>Cramped:</strong> Both individual and shared methods performed similarly due to low coordination needs.</li>
                <li><strong>Coord:</strong> Shared method slightly outperformed the ablation model by enabling flexible role-switching between agents.</li>
                <li><strong>Circuit:</strong> The shared method doubled soup output compared to separate agents by enabling a passing-based strategy.</li>
            </ul>

            <p>
                Evaluation included soup delivery count, agent reward distribution, onion pickups and drops, and qualitative video inspection. The shared method allowed agents to prioritize team strategy over personal reward,
                a behavior that emerged naturally from the architecture.
            </p>

            <h3>Advantages</h3>
            <ul>
                <li>Introduced collaboration without explicit communication channels</li>
                <li>Enabled flexible strategies based on environment layout</li>
                <li>Demonstrated scalability from simple to complex scenarios</li>
            </ul>

            <h3>Limitations</h3>
            <ul>
                <li>Training instability in more complex environments (e.g., circuit)</li>
                <li>Sparse rewards made convergence sensitive to initialization</li>
                <li>Did not incentivize multi-pot use in layouts that allowed it</li>
            </ul>

            <h3>Future Work</h3>
            <ul>
                <li>Conduct a deeper ablation study of shared reward vs shared value independently</li>
                <li>Incorporate reward shaping for partial soups and incorrect delivery behaviors</li>
                <li>Improve training reliability with sparse reward signals</li>
                <li>Encourage diverse resource usage (e.g., both pots)</li>
            </ul>
        </section>
    );
};
