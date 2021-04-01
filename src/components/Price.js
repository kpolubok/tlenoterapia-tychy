import React from 'react';
import '../assets/sass/price.scss';

export default function Price() {
    return (
        <section id="prc" className="wrapper style1 special container-price-section">
            <div className="inner">

                <header className="major">
                    <h2>
                        Cennik
                    </h2>
                </header>
            </div>
            <div className="container-price">
                <div className="grid-1-5">
                    <h2>Basic</h2>
                    <h3>100<sub>zł</sub></h3>
                    <h3><span className="small">/wejście</span></h3>
                    <p>60 minut</p>
                    <span className="icon solid fa-viruses major style3">
                        <span className="label">tlen</span>
                    </span>
                </div>
                <div className="grid-1-5">
                    <h2>Basic +</h2>
                    <h3>120<sub>zł</sub></h3>
                    <h3><span className="small">/wejście</span></h3>
                    <p>80 minut</p>
                    <span className="icon solid fa-viruses major style3">
                        <span className="label">tlen</span>
                    </span>
                </div>
                <div className="grid-1-5">
                    <h2>Relax</h2>
                    <h3>270<sub>zł</sub></h3>
                    <h3><span className="small">/ 3 wejścia</span></h3>
                    <p> 3 x 60 minut</p>
                    <span className="icon solid fa-viruses major style3">
                        <span className="label">tlen</span>
                    </span>
                </div>
                <div className="grid-1-5">
                    <h2>Relax +</h2>
                    <h3>320<sub>zł</sub></h3>
                    <h3><span className="small">/ 3 wejścia</span></h3>
                    <p>3 x 80 minut</p>
                    <span className="icon solid fa-viruses major style3">
                        <span className="label">tlen</span>
                    </span>
                </div>
                <div className="grid-1-5">
                    <h2>Cel</h2>
                    <h3>900<sub>zł</sub></h3>
                    <h3><span className="small">/ 10 wejść</span></h3>
                    <p>10 x 60 minut</p>
                    <span className="icon solid fa-viruses major style3">
                        <span className="label">tlen</span>
                    </span>
                </div>
                <div className="grid-1-5">
                    <h2>Cel +</h2>
                    <h3>1000<sub>zł</sub></h3>
                    <h3><span className="small">/ 10 wejść</span></h3>
                    <p>10 x 80 minut</p>
                    <span className="icon solid fa-viruses major style3">
                        <span className="label">tlen</span>
                    </span>
                </div>
            </div>
        </section>
    );
}
