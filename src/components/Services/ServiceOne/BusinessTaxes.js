import skillImg from "../../../assets/images/home/BusinessTaxes1.jpg";
// import skillShape from "../../../assets/images/home/skill-shape.png";
// import CountUp from 'react-countup';
// import VisibilitySensor from 'react-visibility-sensor';

// const skills = [
//   {
//     id: 1,
//     title: "Business Growth",
//     skillNum: 80,
//     image: skillShape,
//   },
//   {
//     id: 2,
//     title: "End tax nightmare",
//     skillNum: 65,
//     image: skillShape,
//   },
//   {
//     id: 3,
//     title: "Active Clients",
//     skillNum: 73,
//     image: skillShape,
//   },
// ];

const ServiceTwo = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* <!-- Call To Action start --> */}
            <div className="skill-content">
              {/* <div className="sub-title">
                <span className="border-left"></span>Tailored to Every Business
                Need!
              </div> */}
              <h2>Business Taxes </h2>
              <div className="sub-title">
                <span className="border-left"></span>Tailored to Every Business
                Need
              </div>
              {/* <h2>Tailored to Every Business Need </h2> */}
              {/* <h3 className="sec-title">
                Taxation and management Solutions For Business
              </h3> */}
              <h3 className="sec-desc">
                Whether you're a startup looking to establish robust tax
                practices or a multinational seeking to navigate cross-border
                tax complexities, our services are scaled to your needs
              </h3>
              <div className="sub-title">
                <span className="border-left"></span>Elevate Your Business with
                Strategic Tax Management
              </div>
              <h3 className="sec-desc">
                Let taxes become a strategic asset for your business. With our
                business tax services,elevate your approach to taxes and unlock
                the potential for growth and innovation.
              </h3>
              {/* <div className="skill-wrapper">

                                {
                                    skills?.map(skill => {
                                        return (
                                            <div key={skill?.id} className="skill-item">
                                                <div className="skill-number" style={{ backgroundImage: `url(${skill?.image})` }}>
                                                    <h2>
                                                        <CountUp end={skill?.skillNum} redraw={true}>
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor onChange={start} delayedCall>
                                                                    <>
                                                                        <span ref={countUpRef} />
                                                                        <span className="suffix">%</span>
                                                                    </>
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                    </h2>
                                                </div>
                                                <p>{skill?.title}</p>
                                            </div>
                                        );
                                    })
                                }

                            </div> */}
            </div>
            {/* <!-- Call To Action End --> */}
          </div>
          <div className="col-lg-6 col-md-6">
            {/* <!--  Skill Image start --> */}
            <div className="skill-thumb">
              <div className="angle-top"></div>
              <img src={skillImg} alt="" />
              <div className="angle-bottom"></div>
            </div>
            {/* <!-- Skill Image End --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;
