import React from 'react'
import './Hero.css'
import arrow_button from '../../assets/arrow_btn.png'
import play_button from '../../assets/play_icon.png'
import pause_button from '../../assets/pause_icon.png'
function Hero({ setPlayStatus, heroData, heroCount, setHeroCount, playStatus }) {
    return (
        <>
            <div className='hero'>
                <div className="hero-text">
                    <p>{heroData.text1}</p>
                    <p>{heroData.text2}</p>
                </div>
                <div className="hero-explore">
                    <p>Explore the features</p>
                    <img src={arrow_button} alt="" />
                </div>
                <div className="hero-dot-play">

                    <ul className="hero-dots">
                        <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                        <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                        <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                    </ul>
                    <div className="hero-play">
                        <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_button : play_button} alt="" />
                        <p>See the video</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero


