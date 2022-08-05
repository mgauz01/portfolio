import React from 'react'
import {Link} from 'react-router-dom'
import logo1 from '../../images/work/render.png'
import logo2 from '../../images/work/intel.png'
import logo3 from '../../images/work/upwork.png'
import logo4 from '../../images/work/4.png'
import SectionTitle from '../SectionTitle/SectionTitle'

const Expriences = [
    {
        date: '2022 - Present',
        logo: logo1,
        position: 'Backend Engineer',
        companyName: 'Trapeza Group, USA.',
        workFrom: 'https://renderseo.com/',
    },
    {
        date: '2021 - 2022',
        logo: logo2,
        position: 'Software Automation Engineer',
        companyName: 'Intel Corporation',
        workFrom: '\nToronto, Canada',
        website: 'https://www.intel.com/'

    },
    {
        date: '2019 - 2021',
        logo: logo3,
        position: 'Web Developer',
        companyName: 'Freelance',
        workFrom: '\nToronto, Canada',
        website: 'https://www.upwork.com'
    }
]


const Exprience = (props) => {
    return (
        <div className="wpo-work-area section-padding">
            <div className="container">
                <SectionTitle Title={'My Work Experience'} />
                <div className="wpo-work-wrap">
                    {Expriences.map((exprience, exp) => (
                        <div className="wpo-work-item" key={exp}>
                            <ul>
                                <li className="date">{exprience.date}</li>
                                <li className="logo"><img src={exprience.logo} alt=""/></li>
                                <li className="position">{exprience.position} <span>{exprience.companyName} <span>{exprience.workFrom}</span></span></li>
                                <li className="link"><a href={exprience.website}> Go to website </a></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Exprience;