import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import PortfolioImage from '../assets/images/portfolio-details/1.jpg';
import PortfolioContent from '../components/PortfolioContent/PortfolioContent';

const portfolio = {
    featureImg: PortfolioImage,
    projectName: "Miranda Taxation",
    clientName: "Miranda H. Halim",
    date: "30 December 2022",
    tag: ["Tax resolution", "Tax filing", "Payrol services"],
    link: '/'
}

const SinglePortfolio = () => {
    return (
        <>
            {/* Page Banner section  */}
            <BannerTwo pageTitle="Portfolio Details" title="Miranda Company Taxation" />

            {/* Page Banner section  */}
            <PortfolioContent portfolio={portfolio} />

        </>
    );
};

export default SinglePortfolio;