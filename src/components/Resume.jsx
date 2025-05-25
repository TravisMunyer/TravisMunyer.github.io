import React from 'react';

export default function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <section>
                <h3>Summary</h3>
                <p>
                    Highly motivated and results-driven Software Engineer with 4+ years of experience and a robust foundation in machine learning. Committed to developing data-driven software that adapts to the evolving needs of the market. Pursuing an M.S. in Computer Science (Machine Learning specialization) at Georgia Tech (December 2025).
                </p>
            </section>
            <section>
                <h3>Experience</h3>
                <h4>Software Engineer II, Garmin</h4>
                <p><em>May 2023 - Present, Olathe, Kansas</em></p>
                <ul className="bullets">
                    <li>Engineered ML algorithms with Python and Scikit-learn, enhancing feature capabilities and driving a significant competitive edge in proprietary data, contributing millions in value.</li>
                    <li>Facilitated alignment with GDPR and privacy standards, leading to the creation of valuable data products with minimal supervision.</li>
                    <li>Developed terabyte-scale backend services and web frontend systems utilizing C# and Blazor, facilitating highly customized routing experiences and map data creation through private cloud resources and AWS (DynamoDB and S3).</li>
                    <li>Executed in-depth data audits on legacy text datasets employing SQL and Python, leading to a 90% improvement in data quality for a highly utilized mapping product.</li>
                    <li>Implemented structured learning pathway and code review cycles for junior developers, resulting in a 60% increase in quality contributions to team objectives.</li>
                </ul>
                <h4>Researcher, University of Nebraska at Omaha</h4>
                <p><em>September 2020 - May 2023, Omaha, NE</em></p>
                <ul className="bullets">
                    <li>Developed advanced neural network architectures and curated highly-cited image datasets to detect anomalies (Foreign Object Debris) in runway and taxiway images, improving accuracy by 5% and recall by 17%.</li>
                    <li>Authored comprehensive studies on deep-learning inspired techniques for safeguarding image and text through watermarks with TensorFlow.</li>
                    <li>Provided guidance to interns to enable their successful contributions to research projects.</li>
                    <li>Facilitated inter-departmental collaboration to secure crucial research funding, increasing annual project budgets by 30%.</li>
                </ul>
            </section>
            <section>
                <h3>Education</h3>
                <h4>Master of Science in Computer Science, Specialization in Machine Learning, Georgia Institute of Technology</h4>
                <p><em>Atlanta, GA &mdash; Expected Graduation: December 2025 &mdash; GPA: 4.00/4.00</em></p>
                <h4>Bachelor of Science in Computer Science (Minor in Mathematics), University of Nebraska at Omaha</h4>
                <p><em>Omaha, NE &mdash; August 2020 - May 2023 &mdash; GPA: 3.99/4.00</em></p>
                <h4>Bachelor of Science in Cybersecurity, University of Nebraska at Omaha</h4>
                <p><em>Omaha, NE &mdash; August 2020 - May 2023 &mdash; GPA: 3.99/4.00</em></p>
            </section>
            <section>
                <h3>Skills</h3>
                <ul className="no-bullets">
                    <li><strong>Programming Languages:</strong> Python, C#, Java, C++, SQL</li>
                    <li><strong>Web Development:</strong> HTML, CSS, Javascript, React, ASP.NET Core, Blazor, gRPC, Protobuf, FastAPI, REST</li>
                    <li><strong>Version Control:</strong> Git, GitHub, Azure DevOps</li>
                    <li><strong>Cloud & Infrastructure:</strong> AWS (SageMaker, Bedrock, Lambda, S3, DynamoDb, EC2, MSK, QuickSight, Redshift), Docker, Kubernetes, Ray, KubeFlow, MLFlow, Feast, Microsoft SQL Server, PostgreSQL, Apache Airflow, Tableau, dbt, Snowflake, ML Ops, GCP, Vector Databases, LlamaIndex, Ollama, vLLM, Spark, Linux</li>
                    <li><strong>Machine Learning:</strong> Deep Learning, Computer Vision, NLP, Reinforcement Learning, Supervised/Unsupervised/Self-Supervised Learning, Classification, Segmentation, Object Detection, Statistical Analysis, OCR, Knowledge Distillation, Transfer Learning, Grad-Cam, RLHF, Data Engineering, Federated Learning</li>
                    <li><strong>Reinforcement Learning Methods:</strong> PPO, GRPO, A2C, A3C, Policy Iteration, Q-Learning, SARSA, Deep RL, Multi-Agent RL, Reward Shaping</li>
                    <li><strong>Frameworks & Libraries:</strong> Numpy, Pandas, OpenCV, PyTorch, TensorFlow, Scikit-learn, XGBoost, HuggingFace, Flower, LangChain, TorchRL, FAISS, Stable Baselines</li>
                    <li><strong>Models:</strong> BERT, LLama, GPT, YOLO, SegFormer, DeepLabV3, SSD, Decision Trees, Random Forests, Linear/Logistic Regression, SVM, Boosting, Bayes, Neural Networks, Transformers, Diffusion, LLMs</li>
                    <li><strong>Other:</strong> Distributed Computing, GIS, Routing, Search, Data Visualization, Investment Products, Data Science, Stereo Vision, Calibration, Generative AI, AI Engineering, Algorithms, CI/CD, Software Engineering, Robotics, Motion Planning, Autonomous Vehicles, Data Pipelines, Unity, Leadership, Mentorship</li>
                </ul>
            </section>
        </div>
    );
}