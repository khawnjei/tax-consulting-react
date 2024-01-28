import { Link } from "react-router-dom";
import ThemeSlider from "../../Sliders/ThemeSlider/ThemeSlider";
import partnerOneImage from "../../../assets/images/home/client-logo/1.png";
import partnerTwoImage from "../../../assets/images/home/client-logo/2.jpg";
import partnerThreeImage from "../../../assets/images/home/client-logo/3.png";
import partnerFourImage from "../../../assets/images/home/client-logo/4.png";
import partnerFiveImage from "../../../assets/images/home/client-logo/5.png";

const partners = [
  {
    id: 1,
    image: partnerOneImage,
    link: "#",
  },
  {
    id: 2,
    image: partnerTwoImage,
    link: "#",
  },
  {
    id: 3,
    image: partnerThreeImage,
    link: "#",
  },
  {
    id: 4,
    image: partnerFourImage,
    link: "#",
  },
  {
    id: 5,
    image: partnerFiveImage,
    link: "#",
  },
  {
    id: 6,
    image: partnerOneImage,
    link: "#",
  },
  {
    id: 7,
    image: partnerTwoImage,
    link: "#",
  },
  {
    id: 8,
    image: partnerThreeImage,
    link: "#",
  },
  {
    id: 9,
    image: partnerFourImage,
    link: "#",
  },
  {
    id: 10,
    image: partnerFiveImage,
    link: "#",
  },
];

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const FooterOne = () => {
  return (
    <footer className="footer-01">
      {/* Partner Slider Section  */}
      <ThemeSlider
        images={partners}
        classes="client-logo owl-carousel"
        settings={settings}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-border"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            {/* <!-- Navigation Menu Start --> */}
            <aside className="widget">
              <h3 className="widget-title">BarakaTax</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {/* <li><Link to="/">Press</Link></li> */}
                {/* <li><Link to="/">Legal</Link></li> */}
              </ul>
            </aside>
            {/* <!-- Navigation Menu End --> */}
          </div>
          {/* <div className="col-lg-3 col-md-6">
                        <aside className="widget">
                            <h3 className="widget-title">Community</h3>
                            <ul>
                                <li><Link to="/">Tutorials</Link></li>
                                <li><Link to="/">Meetups</Link></li>
                                <li><Link to="/">Q&A</Link></li>
                                <li><Link to="/">Write for DOnations</Link></li>
                                <li><Link to="/">Droplets for Demos</Link></li>
                                <li><Link to="/">Hatch Startup Program</Link></li>
                                <li><Link to="/">Shop Swag</Link></li>
                                <li><Link to="/">Research Program</Link></li>
                            </ul>
                        </aside>
                    </div> */}
          <div className="col-lg-3 col-md-6">
            {/* <!-- Navigation Menu Start --> */}
            <aside className="widget">
              <h3 className="widget-title">Services</h3>
              <ul>
                <li>
                  <Link to="IndividualTaxes">Tax Filing</Link>
                </li>
                <li>
                  <Link to="ItinContactForm">ITIN Application</Link>
                </li>{" "}
                <li>
                  <Link to="BusinessEntityRegistration">
                    Business Registration
                  </Link>
                </li>
                <li>
                  <Link to="MonthlyBookkeeping">Bookkeeping</Link>
                </li>
                <li>
                  <Link to="TaxRegistrationRoadMap">Tax Resolution</Link>
                </li>
                {/* <li>
                  <Link to="/">ITIN Application</Link>
                </li>
                <li>
                  <Link to="/">Quickbooks Accounting</Link>
                </li>
                <li>
                  <Link to="/">Payroll Services</Link>
                </li>
                <li>
                  <Link to="/">Tax Resolution</Link>
                </li> */}
              </ul>
            </aside>
            {/* <!-- Navigation Menu End --> */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* <!-- Navigation Menu Start --> */}
            {/* <aside className="widget">
              <h3 className="widget-title">Solutions</h3>
              <ul>
                <li>
                  <Link to="/contact">Get Support</Link>
                </li>
                <li>
                  <Link to="/contact">Trouble Signing In?</Link>
                </li>
                <li>
                  <Link to="/contact">Book Cunsuting</Link>
                </li>
                <li>
                  <Link to="/contact">Report Abuse</Link>
                </li>
                <li>
                  <Link to="/contact">System Status</Link>
                </li>
              </ul>
            </aside> */}
            {/* <!-- Navigation Menu End --> */}

            {/* <!-- Quote Btn Start --> */}
            <aside className="widget">
              {/* <Link className="quomodo-btn" to="/">
                Get Appointment <i className="fa fa-long-arrow-right"></i>
              </Link> */}
              <Link to="Contact" className="appoint-btn">
                Get Appointment <i className="fa fa-long-arrow-right"></i>
              </Link>
            </aside>
            {/* <!-- Quote Btn  End --> */}
          </div>
        </div>
        {/* <!-- Copyright --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright clearfix">
              <ul>
                <li>
                  <Link to="/https://web.facebook.com/barakatax999">
                    <i className="fa fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/https://www.instagram.com/barakataxservices/">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-behance"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/https://www.linkedin.com/in/seamira-lip-9896aa1a5/">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
              <p>2024 BarakaTax & Bookkeeping LLC</p>
            </div>
          </div>
        </div>
        {/* <!-- Copryright --> */}
      </div>
    </footer>
  );
};

export default FooterOne;
