import { Link } from 'react-router-dom';
import paginationImage from '../../../assets/images/service-details/pagination-bg.jpg';

const CallToActionThree = () => {
    return (
        <section className="pagination-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p>
                        We provide comprehensive tax planning and preparation, maximize your tax refunds, avoid mistakes, save time & money, mitigate stress.[10]
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-pagi">
                            <div className="previous">
                                <Link to="/">Prev Service</Link>
                                <h3>bookkeeping</h3>
                            </div>
                            <div className="next" style={{ backgroundImage: `${paginationImage}` }}>
                                <Link to="/">Next Service</Link>
                                <h3>Tax Filing</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionThree;