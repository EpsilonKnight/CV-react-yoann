import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Javascript", xp: 0.5 },
            { id: 2, value: "CSS", xp: 0.8 },
            { id: 3, value: "Php", xp: 0.7 },
            { id: 4, value: "Html", xp: 0.8 },
        ],
        frameworks: [
            { id: 1, value: "Symfony", xp: 0.6 },
            { id: 2, value: "Laravel", xp: .3 },
            { id: 3, value: "React", xp: 0.3 },
            { id: 3, value: "Bootstrap", xp: .6 },
        ]
    }

    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                    languages={languages}
                    className='languageDisplay'
                    title='languages' />
                <ProgressBar
                    title='frameworks et bibliothèque'
                    className="frameworksDisplay"
                    languages={frameworks}
                />
            </div>

        );
    }
}

export default Languages;