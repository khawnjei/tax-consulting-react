import { Link } from "react-router-dom";

const platforms = [
    {
        id: 1,
        icon: 'fa-search',
        name: 'Finding'
    },
    {
        id: 2,
        icon: 'fa-edit',
        name: 'Shorting'
    },
    {
        id: 3,
        icon: 'fa-desktop',
        name: 'Listing'
    },
    {
        id: 4,
        icon: 'fa-users',
        name: 'Consult'
    },
    {
        id: 5,
        icon: 'fa-paper-plane',
        name: 'Investigation'
    },
    {
        id: 6,
        icon: 'fa-sun-o',
        name: 'Resolution'
    }
];

const Platform = () => {
    return (
        <section className="platform-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="sub-title">Core Platform</div>
                        <h3 className="sec-title">
                            What We Actually
                            Use As Cunsultent.
                        </h3>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="more-link">
                            <p>
                                Our vertical solutions expertise allows your business
                                to streamline workflow.
                            </p>
                            <Link to="/"><i className="fa fa-long-arrow-right"></i>Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- Icon Box Item Start --> */}
                    {
                        platforms?.map(platform => {
                            return (
                                <div key={platform?.id} className="col-lg-2 col-md-4">
                                    <div className="icon-box-2 text-center">
                                        <i className={`fa ${platform?.icon}`}></i>
                                        <p>{platform?.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <!-- Icon Box Item End --> */}

                </div>
            </div>
        </section>
    );
};

export default Platform;