import BannerTwo from "../components/Banners/BannerTwo/BannerTwo";
import SingleServiceContent from "../components/SingleServiceContent/SingleService";
import singleServiceImage from "../assets/images/service-details/1.jpg";
import Platform from "../components/Platform/Platform";
import ImageGrid from "../components/ImageGrid/ImageGrid";
// import Pricing from '../components/Pricing/Pricing';
import GridImageOne from "../assets/images/service-details/2.jpeg";
import GridImageTwo from "../assets/images/service-details/3.jpg";
import GridImageThree from "../assets/images/service-details/4.jpg";
import CallToActionThree from "../components/CallToActions/CallToActionThree/CallToActionThree";
const gridImages = [GridImageOne, GridImageTwo, GridImageThree];

const service = {
  title: "Expert tax and bookkeeping service",
  description: `
        <p>
            <span>M</span>We are the real tax professionals!
            As Enrolled Agents, we admitted practicing in all 50 states through the Department of the Treasury Internal Revenue Service(IRS). 
              The benefits when you choose us:
            Never get confused about your taxes, we make things clear & accurate. 
            Make your business a well-oiled machine with efficient accounting and bookkeeping strategies.
            Get a better quality of life since you save & make more money. 
            Never overpay your taxes, and no one penny more. 
            Kit away stress as we got your back. We make sure your tax plan is legal in every way.
        </p>
        <p>
        We are Tax Strategists, offering Quality Tax & Bookkeeping Solutions!
              </p>
        <p>
        How to reduce tax liability by 10-35% legally?
        Book your free strategy call with us today!
        We will start by analyzing your previous year's tax return and see where you have overpaid, then create a personalized Tax & Bookkeeping services package base on your situation. You will keep every penny you deserved from now on.  
          </p>
    `,
  image: singleServiceImage,
};

const SingleService = () => {
  return (
    <>
      {/* Page Banner section  */}
      <BannerTwo
        pageTitle="Service Details"
        title="Tax and Bookkeeping Consultancy"
      />

      {/* Single Service Details section  */}
      <SingleServiceContent singleDetails={service} />

      {/* Platform section  */}
      <Platform />

      {/* Grid Image section  */}
      <ImageGrid images={gridImages} />

      {/* Pricing Section  */}
      {/* <Pricing /> */}

      {/* Call To Action Section  */}
      <CallToActionThree />
    </>
  );
};

export default SingleService;
