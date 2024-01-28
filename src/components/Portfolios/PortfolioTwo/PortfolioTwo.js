import { Link } from 'react-router-dom';
import portfolioImgOne from '../../../assets/images/home3/portfolio/1.jpg';
import portfolioImgTwo from '../../../assets/images/home3/portfolio/2.jpg';
import portfolioImgThree from '../../../assets/images/home3/portfolio/3.png';
import portfolioImgFour from '../../../assets/images/home3/portfolio/4.gif';
import portfolioImgFive from '../../../assets/images/home3/portfolio/5.png';

const portfolios = [
    {
        id: 1,
        image: portfolioImgTwo,
        name: 'Consulting',
        company: 'Rosalina Print Co.',
        link: '/'
    },
    {
        id: 2,
        image: portfolioImgThree,
        name: 'Consulting',
        company: 'Rosalina Print Co.',
        link: '/'
    },
    {
        id: 3,
        image: portfolioImgFour,
        name: 'Consulting',
        company: 'Rosalina Print Co.',
        link: '/'
    },
    {
        id: 4,
        image: portfolioImgFive,
        name: 'Consulting',
        company: 'Rosalina Print Co.',
        link: '/'
    }
]

const PortfolioTwo = () => {
    return (
        <section className="portfolio-section-2 ps-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="work-title">
                            <div className="sub-title">
                                <span className="border-left bl-3"></span>Case Study
                            </div>
                            <h3 className="sec-title">
                                Our Portfolio
                            </h3>
                            <i className="fa fa-long-arrow-right"></i>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- Work Item --> */}
                        <div className="work-item work-item-2">
                            <img src={portfolioImgOne} alt="" />
                            <div className="work-detail">
                                <Link className="cate" to="/">Consulting</Link>
                                <h4><Link to="/">Rosalina Print Co.</Link></h4>
                            </div>
                        </div>
                        {/* <!-- Work Item --> */}
                    </div>
                </div>
                <div className="row">

                    {/* <!-- Work Item --> */}
                    {
                        portfolios?.map(portfolio => {
                            return (
                                <div key={portfolio?.id} className="col-lg-3 col-md-6">
                                    <div className="work-item work-item-2">
                                        <img src={portfolio?.image} alt="" />
                                        <div className="work-detail">
                                            <Link className="cate" to={portfolio?.link}>{portfolio?.name}</Link>
                                            <h4><Link to={portfolio?.link}>{portfolio?.company}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default PortfolioTwo;