import { Link } from 'react-router-dom';
import callToActionOneImg from '../../../assets/images/home/cta-1.png';
import callToActionTwoImg from '../../../assets/images/home/cta-2.png';

const CallToActionOne = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- Call To Action start --> */}
                        <div className="cta-item">
                            <img src={callToActionOneImg} alt="" />
                            <Link to="#">Make Appointment<i className="fa fa-long-arrow-right"></i></Link>
                            <h4>Consulting For Cryptocurency Taxation</h4>
                        </div>
                        {/* <!-- Call To Action End --> */}
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- Call To Action start --> */}
                        <div className="cta-item right">
                            <img src={callToActionTwoImg} alt="" />
                            <Link to="#">Get In Touch<i className="fa fa-long-arrow-right"></i></Link>
                            <h4>Consulting For Tax Resolution</h4>
                        </div>
                        {/* <!-- Call To Action End --> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionOne;