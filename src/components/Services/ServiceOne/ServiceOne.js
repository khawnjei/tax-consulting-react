import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 2,
    title: "Tax Services For Business & Individuals",
    link: "#",
    description:
      "Navigate IRS for optimal tax solutions. Transparent, flat fee for peace. Unlock tax success—maximize refunds, save time. Expert solutions for small businesses—seamless tax journey",
    icon: "fa-plus",
    btn1: (
      <Link to="BusinessTaxes" className="appoint-btn">
        Business Taxes <i className="fa fa-long-arrow-right"></i>
      </Link>
    ),
    btn2: (
      <Link to="IndividualTaxes" className="appoint-btn">
        Individual Taxes <i className="fa fa-long-arrow-right"></i>
      </Link>
    ),
  },
  {
    id: 3,
    title: "ITIN Application & Business Registration",
    link: "#",
    description:
      "ITIN Application Business Registration Whether you’re diving into the world of ITIN applications or journeying to start up a business, we’re here to steer you smoothly through every step. Our expert team is fortified with knowledge and experience to ensure accuracy, compliance, and a speedy process for you",
    icon: "fa-plus",
    ItinBtn1: (
      <Link to="ItinContactForm" className="appoint-btn">
        ITIN Application <i className="fa fa-long-arrow-right"></i>
      </Link>
    ),
    ItinBtn2: (
      <Link to="BusinessEntityRegistration" className="appoint-btn">
        Business Entity Registration <i className="fa fa-long-arrow-right"></i>
      </Link>
    ),
  },
  // {
  //   id: 7,
  //   title: "Business Registration",
  //   link: "#",
  //   description:
  //     "Empower business with QuickBooks expertise—Certified Advisors dedicated to seamless setup, troubleshooting, and services. From billable hours to year-end accounting, we've got your success covered.",
  //   icon: "fa-plus",
  // },
  {
    id: 4,
    title: "Bookeeping",
    link: "#",
    description:
      "With our bookkeeping strategy, you can keep your business organized, creating and tracking financial benchmarks, limiting tax burden, and boosting production",
    icon: "fa-plus",
    BookkeepingBtn1: (
      <Link to="MonthlyBookkeeping" className="appoint-btn">
        Monthly Bookkeeping <i className="fa fa-long-arrow-right"></i>
      </Link>
    ),
    BookkeepingBtn2: (
      <Link to="BookkeepingCleanUp" className="appoint-btn">
        Bookeeping Clean-Up <i className="fa fa-long-arrow-right"></i>
      </Link>
    ),
  },
  {
    id: 5,
    title: "Tax Resolution",
    link: "#",
    description:
      "As Enrolled Agents, we are admitted to practice in all 50 states through the IRS. We have served our clients virtually and locally for years. Whatever your tax issues are, we will develop a clear plan to stop the stress and get you back on track.",
    icon: "fa-plus",
    TaxresolutionBtn: (
      <Link to="TaxRegistrationRoadMap" className="appoint-btn">
        Tax Registration Road-Map <i className="fa fa-long-arrow-right"></i>
      </Link>
    ),
  },
];

const ServiceOne = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="sub-title-2">
              <span>Services</span>
            </div>
            <h3 className="sec-title">What We Provide</h3>
          </div>
        </div>
        <div className="row">
          {/* <!-- Service Item Start --> */}
          {services?.map((service) => {
            return (
              <div key={service?.id} className="col-lg-6 col-md-6">
                <div className="serivce-item">
                  <div className="si-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="97"
                      viewBox="0 0 100 97"
                    >
                      <g fill="none">
                        <path
                          fill="#FF4F4F"
                          d="M64.358 24.262c2.687 0 4.873-2.211 4.873-4.928s-2.186-4.928-4.873-4.928c-2.688 0-4.874 2.21-4.874 4.928 0 1.11.365 2.135.98 2.96l-8.007 11.313c-.478-.158-.987-.245-1.517-.245-1.28 0-2.447.502-3.317 1.322l-5.337-3.062c.07-.335.109-.681.109-1.036 0-2.718-2.186-4.928-4.873-4.928-2.687 0-4.873 2.21-4.873 4.928 0 .355.038.701.109 1.036l-5.337 3.062c-.87-.82-2.037-1.322-3.317-1.322-2.687 0-4.873 2.21-4.873 4.928 0 2.717 2.186 4.928 4.873 4.928 2.687 0 4.873-2.211 4.873-4.928 0-.356-.038-.702-.11-1.036l5.338-3.063c.87.82 2.036 1.323 3.317 1.323 1.28 0 2.446-.503 3.317-1.323l5.337 3.063c-.071.334-.11.68-.11 1.036 0 2.717 2.187 4.928 4.874 4.928s4.873-2.21 4.873-4.928c0-1.11-.365-2.135-.98-2.96l8.007-11.314c.478.158.988.246 1.518.246zm0-6.9c1.074 0 1.949.885 1.949 1.972s-.875 1.97-1.95 1.97c-1.074 0-1.949-.883-1.949-1.97s.875-1.971 1.95-1.971zM24.103 40.262c-1.074 0-1.949-.885-1.949-1.972s.875-1.97 1.95-1.97c1.074 0 1.949.883 1.949 1.97s-.875 1.972-1.95 1.972zm13.418-7.704c-1.074 0-1.949-.885-1.949-1.972 0-1.086.875-1.97 1.95-1.97 1.074 0 1.949.884 1.949 1.97 0 1.087-.875 1.972-1.95 1.972zM50.94 40.26c-1.075 0-1.95-.885-1.95-1.972s.875-1.97 1.95-1.97 1.949.883 1.949 1.97-.875 1.972-1.95 1.972z"
                        />
                        <path
                          fill="#000"
                          d="M82.182 71.81H4.163c-.672 0-1.22-.548-1.22-1.22V9.922c0-.672.548-1.219 1.22-1.219h6.938c.813 0 1.472-.658 1.472-1.47 0-.812-.659-1.47-1.472-1.47H4.163C1.868 5.762 0 7.627 0 9.921V70.59c0 2.294 1.868 4.16 4.163 4.16h10.148v3.237c0 1.843 1.501 3.343 3.346 3.343H32.39L25.455 94.86c-.371.723-.085 1.609.638 1.979.215.11.444.162.67.162.535 0 1.05-.292 1.311-.8l7.623-14.87h16.272L59.59 96.2c.26.508.776.8 1.311.8.226 0 .455-.052.67-.162.723-.37 1.01-1.256.639-1.98L55.276 81.33h14.732c1.845 0 3.346-1.5 3.346-3.343V74.75h8.828c.813 0 1.472-.658 1.472-1.47 0-.813-.66-1.47-1.472-1.47zm-11.771 6.177c0 .221-.18.402-.403.402h-52.35c-.223 0-.404-.18-.404-.402V74.75h53.157v3.237zM16.856 9.426h66.483c.672 0 1.219.541 1.219 1.206v13.843c0 .804.658 1.456 1.47 1.456.813 0 1.472-.652 1.472-1.456V10.632c0-2.27-1.867-4.118-4.161-4.118H51.852V3.652C51.852 1.64 50.197 0 48.162 0h-8.948c-2.035 0-3.69 1.639-3.69 3.652v2.862H16.855c-.813 0-1.471.652-1.471 1.456 0 .804.658 1.456 1.47 1.456zm21.61-5.774c0-.408.335-.74.748-.74h8.948c.412 0 .748.332.748.74v2.862H38.465V3.652z"
                        />
                        <path
                          fill="#000"
                          d="M20.66 50.901c-.79 0-1.43.635-1.43 1.418v12.53c0 .784.64 1.418 1.43 1.418h5.796c.789 0 1.429-.634 1.429-1.418V52.32c0-.783-.64-1.418-1.43-1.418H20.66zm4.367 12.53h-2.939v-9.694h2.94v9.694zM34.121 43.218c-.789 0-1.429.62-1.429 1.385v19.319c0 .765.64 1.385 1.43 1.385h5.795c.79 0 1.43-.62 1.43-1.385V44.603c0-.765-.64-1.385-1.43-1.385h-5.796zm4.368 19.319H35.55V45.988h2.939v16.549zM47.583 50.901c-.79 0-1.43.635-1.43 1.418v12.53c0 .784.64 1.418 1.43 1.418h5.796c.789 0 1.429-.634 1.429-1.418V52.32c0-.783-.64-1.418-1.43-1.418h-5.795zm4.367 12.53h-2.939v-9.694h2.94v9.694zM60.083 59.545c-.79 0-1.43.696-1.43 1.556v4.57c0 .86.64 1.557 1.43 1.557h5.796c.789 0 1.429-.697 1.429-1.557s-.64-1.557-1.43-1.557h-4.367v-3.013c0-.86-.64-1.556-1.428-1.556zM99.252 73.342l-8.41-14.452c2.132-2.253 3.683-5.006 4.512-8.074 1.324-4.904.644-10.027-1.914-14.424-5.282-9.078-17.023-12.198-26.172-6.958-9.149 5.24-12.295 16.89-7.013 25.966 2.56 4.398 6.69 7.543 11.634 8.857 1.65.44 3.325.656 4.99.656 1.454 0 2.9-.166 4.314-.494l8.408 14.452c1.03 1.771 2.907 2.763 4.835 2.763.944 0 1.901-.239 2.777-.74 1.719-.984 2.787-2.82 2.787-4.79 0-.966-.258-1.92-.748-2.762zM72.647 61.448c-4.186-1.113-7.686-3.778-9.853-7.502-4.474-7.688-1.81-17.554 5.94-21.993 2.549-1.46 5.335-2.154 8.086-2.154 5.612 0 11.079 2.888 14.08 8.047 2.168 3.725 2.743 8.063 1.622 12.217-1.122 4.154-3.807 7.626-7.561 9.776-3.754 2.15-8.127 2.721-12.314 1.609zm23.1 16.927c-1.26.722-2.879.292-3.607-.958l-8.089-13.905c.81-.328 1.605-.712 2.376-1.154.772-.442 1.503-.934 2.195-1.467l8.091 13.905c.233.4.355.852.355 1.308 0 .934-.506 1.804-1.32 2.27z"
                        />
                        <path
                          fill="#FF4F4F"
                          d="M90.715 50.087c1.037-3.219.79-6.665-.695-9.704-.345-.707-1.22-1.01-1.953-.677-.734.333-1.048 1.176-.703 1.883 1.172 2.397 1.366 5.117.548 7.658-.823 2.556-2.601 4.7-5.006 6.04-2.545 1.416-5.51 1.792-8.348 1.06-2.839-.734-5.211-2.49-6.68-4.944-3.034-5.066-1.227-11.566 4.027-14.491 3.84-2.139 8.608-1.853 12.145.728.646.471 1.567.349 2.056-.275.49-.623.362-1.511-.285-1.983-4.48-3.269-10.52-3.63-15.385-.922-3.224 1.795-5.53 4.693-6.494 8.16-.963 3.468-.469 7.09 1.393 10.199 1.861 3.109 4.867 5.332 8.463 6.262 1.2.31 2.42.464 3.63.464 2.415 0 4.799-.611 6.946-1.807 3.047-1.696 5.299-4.413 6.341-7.65z"
                        />
                      </g>
                    </svg>
                    <h3>
                      <Link to={service?.link}>{service?.title}</Link>
                    </h3>
                  </div>
                  <p>{service?.description}</p>
                  {/* <Link className="read-more" to={service?.link}>
                    <i className={`fa ${service?.icon}`}></i>Read More
                  </Link> */}
                  <div className="btn-design">
                    <>{service?.btn1}</>
                    <>{service?.btn2}</>
                  </div>

                  <div className="btn-design">
                    <>{service?.ItinBtn1}</>
                    <>{service?.ItinBtn2}</>
                  </div>

                  <div className="btn-design">
                    <>{service?.BookkeepingBtn1}</>
                    <>{service?.BookkeepingBtn2}</>
                    <>{service?.TaxresolutionBtn}</>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <!-- Service Item End --> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
