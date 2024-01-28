import BannerTwo from "../components/Banners/BannerTwo/BannerTwo";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactSidebar from "../components/ContactSidebar/ContactSidebar";

const contactInfo = {
  numberOne: "+1 469-237-8402",
  emailOne: "hello@barakatax.com",
  locationOne: "Online Services.",
  locationTwo: "3101 E Abram ST, Ste 101 Arlington, Texas 76010, USA",
};

const Contact = () => {
  return (
    <>
      {/* Page Banner section  */}
      <BannerTwo pageTitle="Contact Us" title="Contact" />

      <section className="contact-page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="sub-title-2">
                <span>Contact</span>
              </div>
              <h3 className="sec-title">Get In Touch</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-page-form">
                {/* Contact Form  */}
                <ContactForm />
              </div>
            </div>

            {/* Contact sidebar  */}
            <ContactSidebar contactInfo={contactInfo} />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="quomodo-map grayscale">
                {/* <iframe title = "myFrame" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed" scrolling="no"></iframe>                       */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
