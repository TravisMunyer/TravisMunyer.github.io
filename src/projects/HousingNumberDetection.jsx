import React from "react";
import image from "../assets/projects/NumDetectSuccess.png";
import ReactGA from "react-ga4";
import success1 from "../assets/projects/NumberDetect/1.png";
import success2 from "../assets/projects/NumberDetect/2.png";
import success3 from "../assets/projects/NumberDetect/3.png";
import success4 from "../assets/projects/NumberDetect/4.png";
import success5 from "../assets/projects/NumberDetect/5.png";

import fail1 from "../assets/projects/NumberDetect/fail-1.png";
import fail2 from "../assets/projects/NumberDetect/fail-2.png";
import fail3 from "../assets/projects/NumberDetect/fail-3.png";

import "../styles/App.css";
const successImages = [success1, success2, success3, success4, success5];
const failImages = [fail1, fail2, fail3];

ReactGA.initialize('G-Q4JHKLZ907');

export const metadata = {
    title: "🔢 Two-Stage Number Detection with CNNs and MSER",
    image,
    slug: "number-detection",
    order: 2,
    description: "A hybrid approach to number detection using MSER for localization and a parameter-efficient CNN for classification on SVHN.",
    keywords: "Travis Munyer, Number Detection, MSER, CNN, SVHN, Computer Vision, DenseNet, MobileNetV2, Object Detection"
};

export default function NumberDetectionProject() {
    ReactGA.send({ hitType: "pageview", page: "/projects/${metadata.slug}" });

    return (
        <section
            id="number-detection-project"
            className="content-page"
        >
            <h2>🔢 Two-Stage Number Detection with CNNs and MSER</h2>
            <p><strong>Travis Munyer | May 2025</strong></p>

            <p>
                This project tackled the challenge of number detection and classification in real-world images using a custom two-stage pipeline.
                The approach combines classical computer vision with deep learning by first using <strong>Maximally Stable Extremal Regions (MSER)</strong> for localization,
                followed by a <strong>convolutional neural network</strong> to classify cropped digit regions into ten digits plus a background class.
            </p>

            <h3>Methodology</h3>
            <p>
                MSER was selected as the region proposal mechanism due to its adaptive, shape-aware extraction, which yielded significantly fewer and better-fitted bounding boxes than sliding window methods.
                However, MSER's tendency to miss digits led to false negatives, and its inclusiveness introduced many false positives, which were later filtered by classification.
            </p>

            <p>
                The classification model used a custom CNN architecture inspired by <strong>MobileNetV2</strong> and <strong>DenseNet</strong>.
                It featured five densely connected inverted residual blocks with depthwise convolutions, followed by pooling and a three-layer classification head.
                An <strong>11th background class</strong> was added to differentiate non-digit regions. VGG16 (pretrained on ImageNet) was also trained as a performance baseline.
            </p>

            <h3>Dataset and Training</h3>
            <p>
                The <strong>SVHN (Street View House Numbers)</strong> dataset was used for both digit and background region generation. Background regions were sampled from false positives produced by MSER
                to ensure alignment between training and inference. A Gaussian blur was applied to input images to reduce noise and match deployment conditions.
            </p>

            <p>
                The model was trained using cross-entropy loss and <strong>Adam optimizer</strong>, with a learning rate scheduler that reduced LR upon validation plateau.
                Training and validation curves showed smooth convergence for both custom and VGG models.
            </p>

            <h3>Results</h3>
            <ul>
                <li><strong>Custom CNN:</strong> 94.3% accuracy, 93.8% balanced accuracy, 3.2 MB parameter file</li>
                <li><strong>VGG16:</strong> 94.6% accuracy, 94.3% balanced accuracy, 512 MB parameter file</li>
                <li>Custom model was preferred for deployment due to its significantly smaller size and nearly identical performance</li>
                <li><strong>MSER Detection Rate:</strong> 38–41%, representing a key bottleneck in the system</li>
            </ul>

            <h3>Advantages</h3>
            <ul>
                <li>Parameter-efficient classifier competitive with VGG16</li>
                <li>MSER provides computationally cheap region proposals</li>
                <li>Custom dataset augmentation improved background filtering</li>
            </ul>

            <h3>Limitations</h3>
            <ul>
                <li>MSER had low recall, missing many digit regions</li>
                <li>Highly textured or occluded digits often misclassified</li>
                <li>Overlapping or poorly labeled boxes in SVHN reduced precision</li>
            </ul>

            <h3>Future Work</h3>
            <ul>
                <li>Replace MSER with a modern object detector like YOLO or SSD</li>
                <li>Improve dataset quality or augment with higher-resolution crops</li>
                <li>Incorporate bounding box regression to improve localization</li>
            </ul>

            <h3>✅ Success Examples</h3>
            <div className="image-grid">
                {successImages.map((img, i) => (
                    <img
                        key={`success-${i}`}
                        src={img}
                        alt={`Success example ${i + 1}`}
                        className="image-grid__img"
                    />
                ))}
            </div>
            <p style={{ fontStyle: "italic", textAlign: "center", marginTop: "8px" }}>
                Examples of successful detection in various lighting conditions and font styles
            </p>

            <h3>❌ Failure Examples</h3>
            <div className="image-grid">
                {failImages.map((img, i) => (
                    <img
                        key={`fail-${i}`}
                        src={img}
                        alt={`Failure example ${i + 1}`}
                        className="image-grid__img"
                    />
                ))}
            </div>
            <p style={{ fontStyle: "italic", textAlign: "center", marginTop: "8px" }}>
                    False positives, multi-digit overlap, and partial occlusions that led to incorrect predictions
            </p>

            <h3>🧠 Failure Analysis and Discussion</h3>
            <p>
                Common failure modes included:
            </p>
            <ul>
                <li><strong>Textured backgrounds:</strong> Triggered false positives, especially from trash cans and patterns</li>
                <li><strong>Occlusions:</strong> Partially covered digits led to confident misclassifications</li>
                <li><strong>Multi-digit overlaps:</strong> Poor SVHN bounding boxes sometimes included multiple digits in one region</li>
                <li><strong>Over-segmentation:</strong> MSER often isolated digit components (like part of a 4) and misclassified them as new digits</li>
            </ul>

            <p>
                These errors could be mitigated by improving the localization phase with:
            </p>
            <ul>
                <li>One-stage object detectors (YOLO/SSD) for more accurate and learnable region proposals</li>
                <li>Bounding box regression and refinement techniques to better frame digits</li>
                <li>Better data curation to remove overlapping/mislabeled examples in SVHN</li>
                <li>Training augmentation strategies that simulate occlusion and blur to build robustness</li>
            </ul>
        </section>
    );
};
