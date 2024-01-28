const ContactSidebar = ({ contactInfo }) => {
  return (
    <div className="col-lg-4">
      <div className="contct-box">
        <i className="fa fa-phone"></i>
        <h3>Call Us</h3>
        <p>
          {contactInfo.numberOne}
          <br />
        </p>
      </div>
      <div className="contct-box">
        <i className="fa fa-envelope"></i>
        <h3>Email Us</h3>
        <p>
          {contactInfo.emailOne}
          <br />
        </p>
      </div>
      <div className="contct-box">
        <i className="fa fa-map-marker"></i>
        <h3>Location</h3>
        <p>{contactInfo.locationTwo}</p>
      </div>
    </div>
  );
};

export default ContactSidebar;
