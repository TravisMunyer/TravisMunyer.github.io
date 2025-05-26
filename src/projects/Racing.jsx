import React from "react";
import image from '../assets/projects/RaceImage.png';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-Q4JHKLZ907');

export const metadata = {
    title: "🏁 Rrrrrracing! Learning to Drive in the DeepRacer Environment",
    image,
    slug: "self-driving-car",
    order: 1
};

export default function Racing() {
    ReactGA.send({ hitType: "pageview", page: "/projects/${metadata.slug}" });

    return (
        <section
            id="deepracer-project"
            className="content-page"
        >
            <h2>🏁 Rrrrrracing! An Exploration of Reinforcement Learning in the DeepRacer Environment</h2>
            <p><strong>Travis Munyer – Georgia Tech | 2025</strong></p>

            <p>
                This project explores reinforcement learning (RL) in the AWS DeepRacer simulation environment, tackling
                three race types:
                <strong>Time Trial</strong>, <strong>Head2Bot</strong>, and <strong>Obstacle Avoidance</strong> across
                three different tracks using Proximal Policy Optimization (PPO).
                The agent learns to drive using stereo cameras and LIDAR as input and a discrete action space customized
                to incorporate human driving knowledge, such as slowing down during turns.
            </p>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src="/assets/projects/videos/head2bot.gif"
                    alt="Multi-agent kitchen collaboration demo"
                    style={{ maxWidth: "100%", borderRadius: "12px" }}
                />
            </div>

            <h3>Methodology</h3>
            <p>
                A five-layer convolutional neural network (CNN) was used to process camera data while a separate
                multilayer perceptron (MLP) handled the LIDAR input.
                These were fused before producing the final output. PPO was selected for its stability and robustness,
                but care was taken to address known issues such as sensitivity to hyperparameters and inefficiencies in
                on-policy data collection.
            </p>

            <p>
                Reward shaping played a key role. Early designs prioritized lap completion using progress-based
                incentives. Later, rewards were modified to encourage speed while avoiding instability.
                In more complex environments involving bots and obstacles, additional logic penalized the agent for
                being on the same side of the track as a hazard.
            </p>

            <p>
                Curriculum learning was used by training the agent first on Time Trials. The resulting weights were then
                transferred to train Head2Bot and Obstacle Avoidance agents.
                This reduced training time for more complex scenarios.
            </p>

            <h3>Results</h3>
            <ul>
                <li><strong>Time Trial:</strong> Fully solved. The agent completed laps consistently at around 23 to 25
                    seconds.
                </li>
                <li><strong>Head2Bot:</strong> The agent achieved high progress and some full lap completions but did
                    not fully solve the environment.
                </li>
                <li><strong>Obstacle Avoidance:</strong> Performance plateaued at around 76 percent completion, with
                    occasional full laps. A tight turn with an obstacle was a recurring failure point.
                </li>
            </ul>

            <p>
                Evaluation included tracking average speed, episode return, and percentage of track completed. Results
                confirmed that the agent learned meaningful behaviors and adapted to each environment type.
            </p>

            <h3>Advantages</h3>
            <ul>
                <li>Efficient reward shaping led to faster convergence in simpler tasks</li>
                <li>Sensor fusion effectively combined visual and LIDAR data</li>
                <li>Transfer learning across race types reduced training time</li>
                <li>Human-informed action space encouraged safe and strategic driving</li>
            </ul>

            <h3>Limitations</h3>
            <ul>
                <li>Complex environments like obstacle avoidance were not fully solved</li>
                <li>Training used a single environment, limiting experience diversity</li>
                <li>Discrete action space constrained flexibility compared to continuous control</li>
                <li>Real-world feedback noise, such as GPS error, was not simulated</li>
            </ul>

            <h3>Future Work</h3>
            <ul>
                <li>Investigate continuous action spaces for more adaptable behavior</li>
                <li>Apply stereo vision techniques to improve perception</li>
                <li>Implement multi-environment training to speed convergence</li>
                <li>Introduce domain randomization and noise for real-world applicability</li>
            </ul>

            <h3>🎥 Demonstration Videos</h3>
            <div >
                <div>
                    <h4>Time Trial</h4>
                    <video controls width="100%">
                        <source src="/assets/projects/videos/time_trial.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <h4>Head2Bot</h4>
                    <video controls width="100%">
                        <source src="/assets/projects/videos/head2bot.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap:"20px"}}>
                    <h4>Obstacle Avoidance</h4>
                    <video controls width="100%">
                        <source src="/assets/projects/videos/obstacle_avoidance.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}