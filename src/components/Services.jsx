import React from 'react';
// import "../Stylefiles/Services.css";
import { FaIcons } from "react-icons/fa";
import {BsCamera, BsCameraVideo, BsCameraReels} from "react-icons/bs"
import {BiPhotoAlbum} from "react-icons/bi"

function Services(){
    return(
        <div className='section-services'>
            <div className='row'>

                {/* photography card */}
                <div className='col-lg-3'>
                    <div className='service-box'>
                        <BsCamera className='service-box__icon'/>
                        <h4 className='heading-tertiory'>
                            photography
                        </h4>
                        <p className='service-box__text'>
                            Photography for all type of events as maternity, babyshower, baby shoot, pre-wedding,
                            wedding, post wedding, fashion shoot, portfoilo shoot, celebrity shoot, outdoor shoot,
                            indoor shoot, etc.
                        </p>
                    </div> 
                </div>
                {/* photography card ends*/}

                {/* videography card */}
                <div className='col-lg-3'>
                    <div className='service-box'>
                        <BsCameraVideo className='service-box__icon'/>
                        <h4 className='heading-tertiory'>
                            videography
                        </h4>
                        <p className='service-box__text'>
                            "This card has supporting text below as a natural lead-in to additional content."
                        </p>
                    </div> 
                </div>
                {/* videography card ends*/}

                {/* cinematography card */}
                <div className='col-lg-3'>
                    <div className='service-box'>
                        <BsCameraReels className='service-box__icon'/>
                        <h4 className='heading-tertiory'>
                            cinematography
                        </h4>
                        <p className='service-box__text'>
                            "This card has supporting text below as a natural lead-in to additional content."
                        </p>
                    </div> 
                </div>
                {/* cinematography card ends */}

                {/* album card */}
                <div className='col-lg-3'>
                    <div className='service-box'>
                        <BiPhotoAlbum className='service-box__icon'/>
                        <h4 className='heading-tertiory'>
                            album
                        </h4>
                        <p className='service-box__text'>
                            "This card has supporting text below as a natural lead-in to additional content."
                        </p>
                    </div> 
                </div>
                {/* album card ends */}

            </div>
        </div>
)
}

export default Services;

