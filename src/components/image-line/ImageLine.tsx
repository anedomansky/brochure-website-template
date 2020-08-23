import React from 'react';
import moviesNotebookImg from '../../assets/images/movies-notebook.jpg';
import moviesPcImg from '../../assets/images/movies-pc.jpg';
import musicDjImg from '../../assets/images/music-dj.jpg';
import musicGirlDancingImg from '../../assets/images/music-girl-dancing.jpg';
import musicGuitarImg from '../../assets/images/music-guitar.jpg';
import musicHeadphonesDancingImg from '../../assets/images/music-headphones-dancing.jpg';
import './ImageLine.scss';

const images = [
    moviesNotebookImg,
    moviesPcImg,
    musicDjImg,
    musicGirlDancingImg,
    musicGuitarImg,
    musicHeadphonesDancingImg,
];

const ImageLine: React.FC = () => (
    <section id="image-line">
        {
            images.map((image, index) => (
                <div className="image-zoom-container">
                    <img src={image} alt={`image-${index}`} />
                </div>
            ))
        }
    </section>
);

export default ImageLine;
