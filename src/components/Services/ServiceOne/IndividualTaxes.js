import skillImg from "../../../assets/images/home/BusinessTax2.jpg";
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

const SkillOne = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* <!-- Call To Action start --> */}
            <div className="skill-content">
              {/* <div className="sub-title">
                <span className="border-left"></span>Individual Taxes!
              </div> */}
              <h2>Individual Taxes</h2>
              {/* <h3 className="sec-title">
                Taxation and management Solutions For Business
              </h3> */}
              <h3 className="sec-desc">
                Whether you’re navigating the complexities of a new tax bracket,
                managing investments, or simply seeking to maximize your refund,
                our tax pro team is equipped with the expertise to guide you
                through the tax season with ease and precision.
              </h3>
              {/* <div className="sub-title">
                <span className="border-left"></span> Navigating Every Tax
                Challenge
              </div> */}
              <h3>Navigating Every Tax Challenge</h3>

              <h3 className="sec-desc">
                No matter the complexity of your taxes, from simple filings to
                multi-faceted financial scenarios, we're here to navigate you
                through with clarity and confidence.
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

export default SkillOne;
