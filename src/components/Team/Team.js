// import { Link } from 'react-router-dom';
// import teamOne from '../../assets/images/home2/team-1.jpg';
// import teamTwo from '../../assets/images/home2/team-2.jpg';
// import teamThree from '../../assets/images/home2/team-3.jpg';

// const teams = [
//     {
//         id: 1,
//         name: 'Rosalina D. William',
//         designation: 'Founder',
//         image: teamOne,
//         link: '/'
//     },
//     {
//         id: 2,
//         name: 'Miranda H. Halim',
//         designation: 'CEO',
//         image: teamTwo,
//         link: '/'
//     },
//     {
//         id: 3,
//         name: 'Twinkel K. Khannnb',
//         designation: 'Consultant',
//         image: teamThree,
//         link: '/'
//     }
// ];

// const Team = () => {
//     return (
//         <section className="team-section folio-team">
//             <div className="container">
//                 <div className="row">
//                     {/* <!-- Team Member start --> */}

//                     {
//                         teams?.map(team => {
//                             return (
//                                 <div key={team?.id} className="col-lg-4 col-md-6">
//                                     <div className="team-member">
//                                         <img src={team?.image} alt="" />
//                                         <div className="team-detail">
//                                             <p className="designation">{team?.designation}</p>
//                                             <h4><Link to={team?.link}>{team?.name}</Link></h4>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }

//                     {/* <!-- Team Member End --> */}

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Team;