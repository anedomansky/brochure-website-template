import React from 'react';
import Carousel from 'nuka-carousel';
import './FeedbackSlider.scss';

const FeedbackSlider: React.FC = () => (
    <section id="feedback-slider">
        <h2>Customer Feedback</h2>
        <Carousel>
            <div className="feedback-slide">TEST</div>
            <div className="feedback-slide">TEST</div>
            <div className="feedback-slide">TEST</div>
            <div className="feedback-slide">TEST</div>
            <div className="feedback-slide">TEST</div>
        </Carousel>
    </section>
);

export default FeedbackSlider;
