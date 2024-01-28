// import skillImg from "../../../assets/images/home/BookkeepingSkill2.jpg";
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

const ServiceOne = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* <!-- Call To Action start --> */}
            <div className="skill-content">
              {/* <div className="sub-title">
                <span className="border-left"></span>Monthly Bookkeeping!
              </div> */}
              <h2>Monthly Bookkeeping</h2>
              {/* <h3 className="sec-title">Monthly Bookkeeping Service</h3> */}
              <h3 className="sec-desc">
                We understand that robust and reliable bookkeeping is the
                cornerstone of any successful business. Our bookkeeping service
                is designed to give you a crystal-clear picture of your
                finances, empowering you to make informed decisions with
                confidence.
              </h3>
              <div className="sub-title">
                <span className="border-left"></span>Perfect for Every Business
              </div>
              <h3 className="sec-desc">
                Whether you're a startup, a growing small business, or an
                established enterprise, our Monthly Bookkeeping Service is
                designed to meet your needs and exceed your expectations.
              </h3>
              <div className="sub-title">
                <span className="border-left"></span>Time to Focus on What
                Matters
              </div>
              <h3 className="sec-desc">
                Let us handle your bookkeeping, you can concentrate on growing
                your business, secure in the knowledge that your financial
                records are in expert hands
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

export default ServiceOne;
