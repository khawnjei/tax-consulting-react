import skillImg from "../../../assets/images/home/BusinessTaxes1.jpg";
import skillImg2 from "../../../assets/images/home/Bookkeeping4.jpg";
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
              <h2>A clear path to resolve your IRS issues</h2>
              {/* <h3 className="sec-title">
                Taxation and management Solutions For Business
              </h3> */}
              <div className="sub-title">
                <span className="border-left"></span> 1. Consultation
              </div>
              <h3 className="sec-desc">
                We'll review your situation and discuss what kind of tax help
                you need.
              </h3>
              <div className="sub-title">
                <span className="border-left"></span> 2. IRS Investigation
              </div>
              <h3 className="sec-desc">
                We will dig into your tax records or related documents to
                identify ways to fix your tax issues.
              </h3>
              <div className="sub-title">
                <span className="border-left"></span> 3. Personalized plan
              </div>
              <h3 className="sec-desc">
                Our expert works with you to develop a detailed IRS plan with
                clear pricing and specific next steps.
              </h3>

              <div className="sub-title">
                <span className="border-left"></span>4. Get back on track
              </div>
              <h3 className="sec-desc">
                We work directly with the IRS to resolve your case and get you
                back in good standing.
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
              <img src={skillImg2} alt="" />
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
