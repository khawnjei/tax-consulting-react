import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import PortfolioTwo from '../components/Portfolios/PortfolioTwo/PortfolioTwo';
// import Team from '../components/Team/Team';
import Testimonial from '../components/Testimonial/Testimonial';

const Portfolio = () => {
    return (
        <>

            {/* Page Banner section  */}
            <BannerTwo pageTitle="Portfolio Page" title="Portfolio" />

            {/* Portfolio Section  */}
            <PortfolioTwo />

            {/* Testimonial Section  */}
            <Testimonial />

            {/* Team Section  */}
            {/* <Team /> */}

        </>
    );
};

export default Portfolio;