import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './App.scss';
import bannerImg from '../../assets/images/adult-beautiful-blur-casual.jpg';
import musicIcon from '../../assets/icons/music.svg';
import musicImg from '../../assets/images/app-entertainment-ipad-mockup.jpg';
import moviesImg from '../../assets/images/iphone-dark-notebook-pen.jpg';
import separatorImg from '../../assets/images/blue-universe.jpg';
import giftCardsImg from '../../assets/images/black-box-with-green-bow-accent.jpg';

const App: React.FC = () => (
    <div className="content" role="application">
        <Header />
        <main>
            <section id="banner">
                <img src={bannerImg} alt="Music-Girl" />
                <div className="banner__text">
                    <h1>myTunes</h1>
                    <h2>Your music, movies and TV shows take center stage.</h2>
                    <p>myTunes is the best way to organize and enjoy music, movies and TV shows you already have - and shop
                    for
                    the ones you want.
                    Enjoy all the entertainment myTunes has to offer on you Mac and PC.
                </p>
                </div>
            </section>
            <section id="music">
                <h1><img className="music__note" src={musicIcon} alt="Music" width="20" height="20" /> Music
            </h1>
                <h3>45 million songs. Zero ads.</h3>
                <p>Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline.
                All the music in your personal myTunes library - no matter where it came from - lives right alongside
                the Orange Music catalog.
                Start your free three-month trial with no commitment, and cancel anytime.
            </p>
                <button type="button">Start Your Trial Now</button>
                <p><small>Orange Music is available in myTunes, and for iOS and Android devices.</small></p>
                <img className="music__tablet" src={musicImg} alt="Tablet-Smartphone-Mockup" />
            </section>
            <section id="movies">
                <h1>The movie and TV show collection you always wished for. Granted.</h1>
                <p>With over 100,000 movies and TV shows to choose from, there's always something great to watch on
                myTunes and if you watch on Orange TV 4K, you'll be able to enjoy a tremendous selection of your
                favorite content in 4K HDR.
                So get ready to enjoy episodes of your favorite TV shows or hit movies you've been waiting to see -
                anytime, anywhere.
                Just tap to play, or even download if you're going somewhere you won't have Wi-Fi.
            </p>
                <button type="button">Learn More</button>
                <img src={moviesImg} alt="Tablet-with-header-and-banner-Mockup" />
            </section>
            <section id="separator">
                <img src={separatorImg} alt="Stars" />
                <div className="separator__text">
                    <h1>A world of entertainment. Available wherever you are.</h1>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                </p>
                </div>
            </section>
            <section id="gift-cards">
                <img className="gift-cards__image" src={giftCardsImg} alt="Gift-Card" />
                <div className="gift-cards__text">
                    <h2>Gift Cards</h2>
                    <p>Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet Lorem
                    Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet Lorem.
                </p>
                    <hr />
                    <a href="#"> Redeem</a>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default App;
