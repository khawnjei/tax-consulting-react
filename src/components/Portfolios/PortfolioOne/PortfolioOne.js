import { Link } from 'react-router-dom';
import portfolioOne from '../../../assets/images/home/1.jpg';
import portfolioTwo from '../../../assets/images/home/2.jpg';
import portfolioThree from '../../../assets/images/home/3.jpg';
import portfolioFour from '../../../assets/images/home/4.jpg';
import portfolioFive from '../../../assets/images/home/5.jpg';
import portfolioSix from '../../../assets/images/home/6.jpg';

const portfolios = [
    {
        id: 1,
        image: portfolioOne,
        tag: 'Consulting',
        title: 'Rosalina Price Co.',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 2,
        image: portfolioTwo,
        tag: 'Consulting',
        title: 'Rosalina Price Co.',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 3,
        image: portfolioThree,
        tag: 'Consulting',
        title: 'Rosalina Price Co.',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 4,
        image: portfolioFour,
        tag: 'Consulting',
        title: 'Rosalina Price Co.',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 5,
        image: portfolioFive,
        tag: 'Consulting',
        title: 'Rosalina Price Co.',
        icon: 'fa-arrow-right',
        link: '#'
    },
    {
        id: 6,
        image: portfolioSix,
        tag: 'Consulting',
        title: 'Rosalina Price Co.',
        icon: 'fa-arrow-right',
        link: '#'
    }
];

const PortfolioOne = () => {
    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <div className="sub-title"><span className="border-left"></span>Case Study</div>
                        <h3 className="sec-title">
                            Some Cool Stuff
                        </h3>
                    </div>
                    <div className="col-lg-6 col-md-4">
                        {/* <Link className="quomodo-btn" to="/">More Works <i className="fa fa-long-arrow-right"></i></Link> */}
                    </div>
                </div>
                <div className="row">

                    {/* <!-- Portfolio Item --> */}
                    {
                        portfolios?.map(portfolio => {
                            return (
                                <div key={portfolio?.id} className="col-lg-4 col-md-6">
                                    <div className="work-item">
                                        <img src={portfolio?.image} alt="" />
                                        <div className="work-detail">
                                            <Link className="cate" to={portfolio?.link}>{portfolio?.tag}</Link>
                                            <h4>{portfolio?.title}</h4>
                                            <Link to={portfolio?.link} className="read-more"><i className={`fa ${portfolio?.icon}`}></i></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <!-- Portfolio Item --> */}
                </div>
            </div>
        </section>
    );
};

export default PortfolioOne;