// import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
// import NewsSidebar from '../components/NewsSidebar/NewsSidebar';
// import gridImageOne from '../assets/images/portfolio-details/2.jpg';
// import gridImageTwo from '../assets/images/portfolio-details/3.jpg';
// import ImageGridTwoColumn from '../components/ImageGrid/ImageGridTwoColumn';
// import gridImageThree from '../assets/images/news-details/blockquote.jpg';
// import authorImage from '../assets/images/news-details/author.jpg';
// import Author from '../components/Author/Author';
// import { Link } from 'react-router-dom';
// import ShareButtons from '../components/ShareButtons/ShareButtons';
// import Comment from '../components/Comment/Comment';

// const images = [gridImageOne, gridImageTwo];

// const singlePost = {
//     id: 1,
//     name: '',
//     description: `
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
//         </p>
//         <p>
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
//         </p>
//     `,
//     moreDescription: `
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
//         </p>
//         <blockquote>
//             <cite><img src=${gridImageThree} alt="" /> by Hetmayar</cite>
//             <p>
//                 Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.
//         </p>
//         </blockquote>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
//         </p>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
//         </p>
//     `,
//     authorName: "Rosalina Williamson",
//     authorDesignation: "Main Author",
//     authorInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
//     authorImage: authorImage,
//     nextPostLink: '#',
//     previousPostLink: '#'
// }

// const SingleNews = () => {

//     return (
//         <>

//             {/* Page Banner section  */}
//             <BannerTwo pageTitle="News Feeds" title="News Details" />

//             <section className="single-news-page">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 col-md-12">
//                             <div className="news-deatil-area">

//                                 <div dangerouslySetInnerHTML={{
//                                     __html: singlePost.description
//                                 }}></div>

//                                 <ImageGridTwoColumn images={images} />

//                                 <div dangerouslySetInnerHTML={{
//                                     __html: singlePost.moreDescription
//                                 }}></div>

//                                 <div className="pagination-share">
//                                     <div className="post-pagination">
//                                         <Link className="prev-post" to={singlePost.previousPostLink}><i className="fa fa-arrow-left"></i></Link>
//                                         <Link className="next-post" to={singlePost.nextPostLink}><i className="fa fa-arrow-right"></i></Link>
//                                     </div>

//                                     {/* Share button  */}

//                                     <div className="social-share">
//                                         <p>Share Now <span>-</span></p>
//                                         <ShareButtons />
//                                     </div>

//                                 </div>

//                                 {/* Author section  */}
//                                 <Author singlePost={singlePost} />

//                             </div>

//                             {/* Comments section  */}
//                             <Comment />


//                         </div>

//                         {/* Sidebar area  */}
//                         <NewsSidebar />

//                     </div>
//                 </div>
//             </section>

//         </>
//     );
// };

// export default SingleNews;