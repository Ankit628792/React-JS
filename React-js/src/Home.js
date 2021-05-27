import React from 'react';
import './Home.css'

function Home() {
    return (
        <div>
            

    <div class="container">
        <div class="text">
            <h2>Ankit OP &#128293;</h2>
        </div>
        <svg>
            <filter id="fire">
                <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="2" seed="3">
                    <animate attributeName="baseFrequency" dur="10s" values="0.1 0.1;0.12 0.2" repeatCount="indefinite"></animate>
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="25"></feDisplacementMap>
            </filter>
        </svg>
    </div>

        </div>
    )
}

export default Home
