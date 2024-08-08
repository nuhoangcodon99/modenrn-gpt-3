import './footer.css'
import logo from '../../assets/logo.svg'

export const Footer = () => {
    return (
        <div className="gpt3__footer section-padding">
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the <br /> future before others</h1>
            </div>
            <div className='gpt3__footer-button'>
                <button type="button">Request Early Access</button>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links__logo'>
                    <img src={logo} alt="logo" />
                    <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='gpt3__footer-links__div'>
                    <h5>Links</h5>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className='gpt3__footer-links__div'>
                    <h5>Company</h5>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                
                <div className='gpt3__footer-links__div'>
                    <h5>Get in touch</h5>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <p className='gpt3__footer-copyright'>© 2021 GPT-3. All rights reserved.</p>
        </div>
    )
}