import React from 'react';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css';

function App() {
    return <>
    <div>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'>Personal Digital Assistants</p>
            </div>
        </section>
    </div>
    <div className='container'>
        <section className="section">
            <div className="columns">
                <div className="column is-3">
                    <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa99"/></div>
                <div className="column is-3">
                    <ProfileCard image={CortanaImage} title="Cortana" handle="@cortana32"/></div>
                <div className="column is-3">
                    <ProfileCard image={SiriImage} title="Siri" handle="@siri01"/></div>
            </div>
        </section>
    </div>
    <div className="column">
    </div>
    </>
}

export default App;