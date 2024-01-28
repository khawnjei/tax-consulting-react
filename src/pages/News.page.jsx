// import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
// import NewsContent from '../components/NewsContent/NewsContent';
// import NewsSidebar from '../components/NewsSidebar/NewsSidebar';
// import newsImageOne from '../assets/images/news/1.jpg';
// import newsImageTwo from '../assets/images/news/2.jpg';
// import newsImageThree from '../assets/images/news/3.jpg';

// const news = [
//     {
//         id: 1,
//         title: 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.',
//         link: '/',
//         category: 'Business',
//         categoryLink: '/',
//         videoLink: '',
//         featureImg: newsImageOne,
//         galleryImages: [],
//         views: '232',
//         comments: '35',
//         date: '24th March 2021'
//     },
//     {
//         id: 2,
//         title: 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.',
//         link: '/',
//         category: 'Business',
//         categoryLink: '/',
//         videoLink: 'LXb3EKWsInQ',
//         featureImg: newsImageTwo,
//         galleryImages: [],
//         views: '232',
//         comments: '35',
//         date: '24th March 2021'
//     },
//     {
//         id: 3,
//         title: 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.',
//         link: '/',
//         category: 'Business',
//         categoryLink: '/',
//         videoLink: '',
//         featureImg: newsImageTwo,
//         galleryImages: [
//             { id: 1, image: newsImageThree, link: "#" },
//             { id: 2, image: newsImageTwo, link: "#" },
//             { id: 3, image: newsImageOne, link: "#" }
//         ],
//         views: '232',
//         comments: '35',
//         date: '24th March 2021'
//     }
// ]

// const News = () => {
//     return (
//         <>
//             {/* Page Banner section  */}
//             <BannerTwo pageTitle="News Feeds" title="News" />

//             {/* Content  */}
//             <section className="news-page">
//                 <div className="container">
//                     <div className="row">
//                         {/* Content area  */}
//                         <NewsContent news={news} />

//                         {/* Sidebar area  */}
//                         <NewsSidebar />
//                     </div>
//                 </div>
//             </section>

//         </>
//     );
// };

// export default News;