import { Link } from "react-router-dom";

const pricings = [
    {
        id: 1,
        name: 'Free Consultation',
        price: 0,
        description: '15 Minutes Free Consutation',
        features: [
            'Tax Filing', 'Tax Resolution', 'Cryptocurency Taxation', 'BookKeeping', 'Payroll Services','CFO Services'
        ],
        buttonText: 'Purchase Now',
        buttonLink: '/',
        class: ''
    },
    {
        id: 2,
        name: 'Strategy',
        price: 199,
        description: '30 Minutes Consultation',
        features: [
            'Tax Filing', 'Tax Resolution', 'Cryptocurency Taxation', 'Bookkeeping', 'Payroll Services','CFO Services'
        ],
        buttonText: 'Purchase Now',
        buttonLink: '/',
        class: 'p-team'
    },
    {
        id: 3,
        name: 'Small Business Services',
        price: 299,
        description: '1 Hour Consultation',
        features: [
            'Tax Filing', 'Tax Resolution', 'Cryptocurency Taxation', 'Bookkeeping', 'Payroll Services','CFO Services'
        ],
        buttonText: 'Purchase Now',
        buttonLink: '/',
        class: 'p-family'
    }
]

const Pricing = () => {
    return (
        <section className="pricing-section-2 width-bg">
            <div className="container">
                <div className="row">

                    {/* <!-- pricing item start --> */}
                    {
                        pricings?.map(pricing => {
                            return (
                                <div key={pricing?.id} className="col-lg-4 col-md-6">

                                    <div className={`pricing-item text-center ${pricing?.class}`}>
                                        <p className="pack-name">{pricing?.name}</p>
                                        <div className="price"><span>$</span>{pricing?.price}</div>
                                        <p className="description">{pricing?.description}</p>
                                        <ul>
                                            {
                                                pricing.features.map((feature, index) => <li key={index}><i className="fa fa-check"></i>{feature}</li>)
                                            }
                                        </ul>
                                        <Link className="quomodo-btn" to={pricing?.buttonLink}>{pricing?.buttonText}</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <!-- pricing item start --> */}

                </div>
            </div>
        </section>
    );
};

export default Pricing;