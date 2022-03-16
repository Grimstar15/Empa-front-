import React from 'react';

import classes from './Footer.module.scss';
import Cards from '../Cards/Cards';

import imgMap from '../../assets/images/map.jpg';
import imgEmail from '../../assets/images/icon_email.png';
import imgPhone from '../../assets/images/icon_phone.png';
import imgLocation from '../../assets/images/icon_location.png';
import imgMplus from '../../assets/images/icon_mplus.png';
import imgMusic from '../../assets/images/icon_music.png';
import imgSoundcloud from '../../assets/images/icon_soundcloud.png';
import imgFacebook from '../../assets/images/icon_facebook.png';
import imgTwitter from '../../assets/images/icon_twitter.png';
import imgYoutube from '../../assets/images/icon_youtube.png';

const footer = (props) => (
    <div className={classes.FooterContainer}>
        <Cards>
            {/* <div className={classes.Footer}> */}
            <div className={classes.FooterMap}>
                <h3>Empasoft Office</h3>
                <img src={imgMap} alt='Map' />
            </div>
            <div className={classes.FooterAddress}>
                <h3>Холбоо барих</h3>
                <div className={classes.FooterAddItem}>
                    <img src={imgEmail} alt="Email" />
                    <a href="mailto:info@empasoft.mn">info@empasoft.mn</a>
                </div>
                <div className={classes.FooterAddItem}>
                    <img src={imgPhone} alt="Phone" />
                    <a href="tel:+97675779393">(+976) 7577-9393</a>
                </div>
                <div className={classes.FooterAddItem}>
                    <img src={imgLocation} alt="Location" />
                    <span>СБД, 6-р хороо, Идэр цогцолбор, 3 давхарт</span>
                </div>
            </div>
            <div className={classes.FooterLinks}>
                <div className={classes.FooterPodcast}>
                    <h3>Podcast</h3>
                    <img src={imgMplus} alt="Mplus" />
                    <img src={imgMusic} alt="Apple" />
                    <img src={imgSoundcloud} alt="Soundcloud" />
                </div>
                <div className={classes.FooterSocial}>
                    <h3>Бидэнтэй холбогдох</h3>
                    <img src={imgFacebook} alt="Facebook" />
                    <img src={imgTwitter} alt="Twitter" />
                    <img src={imgYoutube} alt="Youtube" />
                </div>
            </div>
            {/* </div> */}
            <p>&copy; 2021 Empasoft. All Rights Reserved.</p>
        </Cards>
    </div>
);

export default footer;
