// import skillImg from "../../../assets/images/home/BookkeepingSkill1.jpg";
import skillImg2 from "../../../assets/images/home/Bookkeeping3.jpg";
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
                <span className="border-left"></span>Bookkeeping Cleanup
                Service!
              </div> */}
              <h2>Bookkeeping Cleanup services</h2>
              <h3 className="sec-desc">
                We specialize in transforming your tangled financial data into a
                streamlined, orderly, and actionable ledger, ensuring your
                business decisions are informed, strategic, and data-driven.
              </h3>
              <div className="sub-title">
                <span className="border-left"></span>Seamless Technology
                Integration
              </div>
              <h3 className="sec-desc">
                Our cleanup process is supported by cutting-edge bookkeeping
                software, which ensures that your financial data remains
                accurate and accessible whenever you need it.
              </h3>
              <div className="sub-title">
                <span className="border-left"></span>A Clean Slate for Your
                Books
              </div>
              <h3 className="sec-desc">
                Taking the step towards a clean financial foundation that
                supports growth and success. Setting a new standard for your
                business’s financial practices. Say goodbye to the anxiety of
                messy books and embrace a future of financial clarity and
                control.
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
              {/* <img src={skillImg} alt="" /> */}
              <img src={skillImg2} alt="" />
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
