import React from 'react';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-Q4JHKLZ907');

export default function Publications() {
    ReactGA.send({ hitType: "pageview", page: "/publications" });

    return (
        <div>
            <h2>Publications</h2>
            <ul className="no-bullets">
                <li>
                    Travis Munyer, Abdullah All Tanvir, Arjon Das, Xin Zhong. 2024.<br />
                    <a href="https://ieeexplore.ieee.org/document/10471537" target="_blank" rel="noopener noreferrer">
                        DeepTextMark: A Deep Learning-Driven Text Watermarking Approach for Identifying Large Language Model Generated Text
                    </a>
                </li>
                <li>
                    Travis Munyer, Daniel Brinkman, Xin Zhong, Chenyu Huang, Iason Konstantzos. 2022.<br />
                    <a href="https://ieeexplore.ieee.org/document/10216593" target="_blank" rel="noopener noreferrer">
                        Foreign Object Debris Detection for Airport Pavement Images based on Self-supervised Localization and Vision Transformer
                    </a>
                </li>
                <li>
                    Travis Munyer, Pei-Chi Huang, Chenyu Huang, Xin Zhong. 2021.<br />
                    <a href="https://arxiv.org/abs/2110.03072" target="_blank" rel="noopener noreferrer">
                        FOD-A: A Dataset for Foreign Object Debris in Airports
                    </a>
                </li>
                <li>
                    Travis Munyer, Daniel Brinkman, Chenyu Huang, Xin Zhong. 2021.<br />
                    <a href="https://doi.org/10.1145/3463677.3463743" target="_blank" rel="noopener noreferrer">
                        Integrative Use of Computer Vision and Unmanned Aircraft Technologies in Public Inspection: Foreign Object Debris Image Collection
                    </a>
                </li>
            </ul>
        </div>
    );
}