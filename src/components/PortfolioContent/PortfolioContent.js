import { Link } from "react-router-dom";
import CallToActionThree from "../CallToActions/CallToActionThree/CallToActionThree";
import gridImageOne from '../../assets/images/portfolio-details/2.jpg';
import gridImageTwo from '../../assets/images/portfolio-details/3.jpg';
import ImageGridTwoColumn from "../ImageGrid/ImageGridTwoColumn";

const images = [gridImageOne, gridImageTwo];

const PortfolioContent = ({ portfolio }) => {
    return (
        <section className="single-folio-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="folio-area">
                            <div className="folio-thumb">
                                <img src={portfolio.featureImg} alt="" />
                            </div>
                            <div className="folio-content">
                                <div className="fs-item">
                                    <h5>Project Name</h5>
                                    <p>{portfolio.projectName}</p>
                                </div>
                                <div className="fs-item">
                                    <h5>Client Name</h5>
                                    <p>{portfolio.clientName}</p>
                                </div>
                                <div className="fs-item">
                                    <h5>Date</h5>
                                    <p>{portfolio.date}</p>
                                </div>
                                <div className="fs-item">
                                    <h5>Tag</h5>
                                    <p>
                                        {
                                            portfolio.tag?.map((SinglePortfolio, index) => <Link key={index} to="/">{SinglePortfolio}, </Link>)
                                        }
                                    </p>
                                </div>
                                <div className="fs-item">
                                    <Link className="folio-more" to="/"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <p>
                            We serve small business owners, independent contractors, and individuals. 
We help our clients to reduce tax liability by 5-35%, slash business expenses, stimulate cash flow, and navigate the best financial resource with tax reduction strategies and planning. So they can achieve profitable long-term growth.
                               
                                 </p>
                            <p>
                            We are the real tax professionals!
As Enrolled Agents, we admitted practicing in all 50 states through the Department of the Treasury Internal Revenue Service(IRS).
                                    </p>

                            <ImageGridTwoColumn images={images} />

                            <p>
                                                    
                          Never get confused about your taxes, we make things clear & accurate.
                        Make your business a well-oiled machine with efficient accounting and bookkeeping strategies.
                        Get a better quality of life since you save & make more money. 
                        Never overpay your taxes, and no one penny more. 
                        Kit away stress as we got your back. We make sure your tax plan is legal in every way.
                            </p>

                            <CallToActionThree />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioContent;