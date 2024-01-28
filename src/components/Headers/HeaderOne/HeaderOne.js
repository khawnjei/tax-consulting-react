import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import MainMenu from "../../MainMenus/MainMenu";
import Search from "../../Search/Search";

const HeaderOne = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowHideMobileMenu = () => {
    setShowMobileMenu((props) => !props);
  };

  return (
    <header className="header-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              {/* <!-- logo Start--> */}
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" />
              </Link>
              {/* <!-- logo End--> */}

              {/* <!-- Moblie Btn Start --> */}
              <button
                onClick={handleShowHideMobileMenu}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <!-- Moblie Btn End --> */}

              {/* <!-- Nav Menu Start --> */}
              <div
                className={`collapse navbar-collapse ${
                  showMobileMenu ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <MainMenu />
              </div>
              {/* <!-- Nav Menu End --> */}

              {/* <!-- Search Btn --> */}
              <Search />
              {/* Contact Btn End  */}

              {/* <!-- Appointment Btn --> */}
              <Link to="contact" className="appoint-btn">
                Get Appointment <i className="fa fa-long-arrow-right"></i>
              </Link>
              {/* <!-- Contact Btn End --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
