import { lazy } from "react";

const Home = lazy(() => import("../pages/Home.page"));
const About = lazy(() => import("../pages/About.page"));
const Service = lazy(() => import("../pages/Service.page"));
const SingleService = lazy(() => import("../pages/SingleService.page"));
const Portfolio = lazy(() => import("../pages/Portfolio.page"));
const SinglePortfolio = lazy(() => import("../pages/SinglePortfolio.page"));
// const News = lazy(() => import('../pages/News.page'));
// const SingleNews = lazy(() => import('../pages/SingleNews.page'));
const Contact = lazy(() => import("../pages/Contact.page"));
const ItinContactForm = lazy(() => import("../pages/Itin.page"));
// const ItinContactForm2 = lazy(() =>
//   import("../pages/BusinessEntityRegistration.page")
// );
const MonthlyBookkeeping = lazy(() =>
  import("../pages/MonthlyBookkeeping.page")
);
const BookkeepingCleanUp = lazy(() =>
  import("../pages/BookkeepingCleanUp.page")
);
const BusinessEntityRegistration = lazy(() =>
  import("../pages/BusinessEntityRegistration.page")
);
const BusinessTaxes = lazy(() => import("../pages/BusinessTaxes.page"));
const IndividualTaxes = lazy(() => import("../pages/IndividualTaxes.page"));
const TaxRegistrationRoadMap = lazy(() =>
  import("../pages/TaxRegistrationRoadMap.page")
);

const NotFound = lazy(() => import("../pages/Page404.page"));

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "About",
    path: "/about",
    exact: true,
    component: About,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "Service",
    path: "/service",
    exact: true,
    component: Service,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "MonthlyBookkeeping",
    path: "/MonthlyBookkeeping",
    exact: true,
    component: MonthlyBookkeeping,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "BookkeepingCleanUp",
    path: "/BookkeepingCleanUp",
    exact: true,
    component: BookkeepingCleanUp,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "BusinessTaxes",
    path: "/BusinessTaxes",
    exact: true,
    component: BusinessTaxes,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "IndividualTaxes",
    path: "/IndividualTaxes",
    exact: true,
    component: IndividualTaxes,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "BusinessEntityRegistration",
    path: "/BusinessEntityRegistration",
    exact: true,
    component: BusinessEntityRegistration,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "TaxRegistrationRoadMap",
    path: "/TaxRegistrationRoadMap",
    exact: true,
    component: TaxRegistrationRoadMap,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "Service Details",
    path: "/single-service",
    exact: true,
    component: SingleService,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "Portfolio Page",
    path: "/portfolio",
    exact: true,
    component: Portfolio,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "Single Portfolio",
    path: "/single-portfolio",
    exact: true,
    component: SinglePortfolio,
    authentication: false,
    theme: "theme-1",
  },
  //   {
  //     name: "News",
  //     path: "/news",
  //     exact: true,
  //     component: News,
  //     authentication: false,
  //     theme: "theme-1",
  //   },
  //   {
  //     name: "Single News",
  //     path: "/single-news",
  //     exact: true,
  //     component: SingleNews,
  //     authentication: false,
  //     theme: "theme-1",
  //   },
  {
    name: "Contact",
    path: "/contact",
    exact: true,
    component: Contact,
    authentication: false,
    theme: "theme-1",
  },
  {
    name: "ItinContactForm",
    path: "/ItinContactForm",
    exact: true,
    component: ItinContactForm,
    authentication: false,
    theme: "theme-1",
  },

  {
    name: "NotFound",
    path: "/*",
    exact: false,
    component: NotFound,
    authentication: false,
  },
];

export default routes;
