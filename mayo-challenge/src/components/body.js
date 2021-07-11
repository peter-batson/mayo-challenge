import * as React from "react"
import hero from '../images/photo-hero-desktop.jpg'
import mobileHero from '../images/photo-hero-mobile.png'
import photo1 from '../images/photo-1.jpg'
import photo2 from '../images/photo-2.jpg'
import photo3 from '../images/photo-3.jpg'
import photo5 from '../images/photo-5.jpg'
import photo6 from '../images/photo-6.jpg'
import photo7 from '../images/photo-7.jpg'
import photo8 from '../images/photo-8.jpg'
import photo9 from '../images/photo-9.jpg'
import email from '../images/email.svg'
import './body.css'

const Body = () => {
    return (
        <main className="home__body">
        <section className="home__body__hero">
            <div className="home__body__hero-text">
                <header className="home__body__hero-header">
                    <h1>Lorem Ipsum</h1>
                </header>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui ut eros egestas eleifend ac vitae lorem.</p>
                    <button>Program Features</button>
                </div>
            </div>
            <picture>
                <source srcSet={mobileHero} media="(max-width: 400px)"/>
                <source srcSet={hero}/>
                <img className="home__body__hero-image" src={hero} alt="main hero image"/>
              </picture>
        </section>
        <section>
            <div className="home__body__content-block">
                <div className="home__body__content-image">
                    <img src={photo8} alt="group support image"/>
                </div>
                <section>
                    <header>
                        <h2>You’re not alone</h2>
                    </header>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui ut eros egestas eleifend ac vitae lorem.</p>
                        <button>Group Support</button>
                    </div>
                </section>
            </div>
            <div className="home__body__content-block reverse">
                <div className="home__body__content-image">
                    <img className="home__body__content-image" src={photo9} alt="group support image"/>
                </div>
                <section>
                    <header>
                        <h2>Take it with you</h2>
                    </header>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui ut eros egestas eleifend ac vitae lorem.</p>
                        <button>Viedo & Downloads</button>
                    </div>
                </section>
            </div>
            <div className="home__body__content-block">
                <div className="home__body__content-svg">
                    <img src={email} alt="group support image"/>
                </div>
                <section>
                    <header>
                        <h2>Sign up for email</h2>
                    </header>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui ut eros egestas eleifend ac vitae lorem.</p>
                        <button>Video & Downloads</button>
                    </div>
                </section>
            </div>
        </section>
        <section className="home__body__articles">
            <header>
                <h3>Aenean venenatis sollicitudin</h3>
            </header>
            <div className="home__body__articles-wrapper">
                    <article>
                        <figure>
                            <img className="home__body__articles-image" src={photo1} alt="group support image"/>
                        </figure>
                        <header>
                            <h4>Section One</h4>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="/">Learn ></a>
                    </article>
                    <article>
                        <figure>
                            <img className="home__body__articles-image" src={photo2} alt="group support image"/>
                        </figure>
                        <header>
                            <h4>Section Two</h4>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="/">Learn ></a>
                    </article>
                    <article>
                        <figure>
                            <img className="home__body__articles-image" src={photo3} alt="group support image"/>
                        </figure>
                        <header>
                            <h4>Section Three</h4>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="/">Learn ></a>
                    </article>
                    <article>
                        <figure>
                            <img className="home__body__articles-image" src={photo7} alt="group support image"/>
                        </figure>
                        <header>
                            <h4>Section Four</h4>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="/">Learn ></a>
                    </article>
                    <article>
                        <figure>
                            <img className="home__body__articles-image" src={photo5} alt="group support image"/>
                        </figure>
                        <header>
                            <h4>Section Five</h4>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="/">Learn ></a>
                    </article>
                    <article>
                        <figure>
                            <img className="home__body__articles-image" src={photo6} alt="group support image"/>
                        </figure>
                        <header>
                            <h4>Section Six</h4>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="/">Learn ></a>
                    </article>
                
            </div>
        </section>

    </main>
    )
}

export default Body;