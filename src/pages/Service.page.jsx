import BannerTwo from "../components/Banners/BannerTwo/BannerTwo";
import PortfolioTwo from "../components/Portfolios/PortfolioTwo/PortfolioTwo";
// import Pricing from "../components/Pricing/Pricing";
import ServiceOne from "../components/Services/ServiceOne/ServiceOne";

const Service = () => {
  return (
    <>
      {/* Page Banner section  */}
      <BannerTwo pageTitle="Service Page" title="Service" />

      {/* Service Section  */}
      <ServiceOne />

      {/* Portfolio Section  */}
      <PortfolioTwo />

      {/* Pricing Section  */}
      {/* <Pricing /> */}
    </>
  );
};

export default Service;
