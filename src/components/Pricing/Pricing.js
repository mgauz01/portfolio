import React from 'react'
// import { Link } from 'react-router-dom'
import { Link} from 'react-scroll'
import SectionTitle from "../SectionTitle/SectionTitle";
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'


const Pricing = (props) => {

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">
                        <SectionTitle Title={'Pricing Plan'} />
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Fulltime Position</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        {/* <h2>Contact for info<span></span></h2> */}
                                        <p>Want me on your team? Great! Contact meand let's look over the opportunity together.</p>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>- Softwere Engineer</li>
                                            <li>- Full Stack Engineer</li>
                                            <li>- React Developer</li>
                                            <li>- Python Developer</li>
                                            <li>- DevOps / Cloud Engineer</li>
                                        </ul>
                                        <Link to="contact" spy={true} smooth={true}  duration={500}>GET STARTED</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Freelance Programming</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2>$60<span> / per hour</span></h2>
                                        <p>Freelance Programming</p>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>- Software development</li>
                                            <li>- Develop new features</li>
                                            <li>- Maintaine existing codebase</li>
                                            <li>- Train junior engineers on desired technologies</li>
                                            <li>- Design a product and / or feature roadmap</li>
                                            {/* <li>24/Support</li> */}
                                        </ul>
                                        <div className="slide-btn"><Link to="contact" spy={true} smooth={true}  duration={500}>GET STARTED</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Consultation</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2>$150<span> / one time</span></h2>
                                        <p>Determine the best career path for you as a software engineer</p>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>- Get on the right career path for a software engineer</li>
                                            <li>- Determine which technologies are most appropiriate to you</li>
                                            <li>- Make an actionable & quantifiable plan to get employed in tech</li>
                                            {/* <li>Graphic Design</li>
                                            <li>24/Support</li> */}
                                        </ul>
                                        <PayPalScriptProvider options={{"client-id": "AfcCysIzzhbO52L391cmm3mzhUMh89npjK5nq8Us3zfdkiwqFUAxU2faMWwSF1GV_SnG-nTs1_S4yh4I"}}>
                                            <PayPalButtons
                                            style={{layout: "horizontal"}}
                                            onApprove={(data, actions) => {
                                                return actions.order.capture().then((details) => {
                                                    alert("Transaction completed by " + details.payer.name.given_name)
                                                })
                                            }}
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                  purchase_units: [{
                                                    amount: {
                                                      value: '150.00'
                                                    }
                                                  }]
                                                });
                                              }
                                            }
                                            />
                                        </PayPalScriptProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-p">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4213)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4213" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default Pricing;