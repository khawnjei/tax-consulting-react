import { Link } from 'react-router-dom';
import imageOne from '../../assets/images/news/t1.jpg';
import imageTwo from '../../assets/images/news/t2.jpg';
import imageThree from '../../assets/images/news/t3.jpg';
import imageFour from '../../assets/images/news/t4.jpg';

const trendingPosts = [
    {
        id: 1,
        name: 'The Inflation Reduction Act extended certain energy related tax breaks and indexed for inflation the energy efficient commercial buildings deduction beginning with tax year 2023. For tax year 2023, the applicable dollar value used to determine the maximum allowance of the deduction is $0.54 increased (but not above $1.07) by $0.02 for each percentage point by which the total annual energy and power costs for the building are certified to be reduced by a percentage greater than 25 percent. The applicable dollar value used to determine the increased deduction amount for certain property is $2.68 increased (but not above $5.36) by $0.11 for each percentage point by which the total annual energy and power costs for the building are certified to be reduced by a percentage greater than 25 percent.',
        link: '#',
        image: imageOne,
        date: '24 March, 2022'
    },
    {
        id: 2,
        name: 'The Inflation Reduction Act extended certain energy related tax breaks and indexed for inflation the energy efficient commercial buildings deduction beginning with tax year 2023. For tax year 2023, the applicable dollar value used to determine the maximum allowance of the deduction is $0.54 increased (but not above $1.07) by $0.02 for each percentage point by which the total annual energy and power costs for the building are certified to be reduced by a percentage greater than 25 percent. The applicable dollar value used to determine the increased deduction amount for certain property is $2.68 increased (but not above $5.36) by $0.11 for each percentage point by which the total annual energy and power costs for the building are certified to be reduced by a percentage greater than 25 percent.',
        link: '#',
        image: imageTwo,
        date: '24 March, 2022'
    },
    {
        id: 3,
        name: 'The Inflation Reduction Act extended certain energy related tax breaks and indexed for inflation the energy efficient commercial buildings deduction beginning with tax year 2023. For tax year 2023, the applicable dollar value used to determine the maximum allowance of the deduction is $0.54 increased (but not above $1.07) by $0.02 for each percentage point by which the total annual energy and power costs for the building are certified to be reduced by a percentage greater than 25 percent. The applicable dollar value used to determine the increased deduction amount for certain property is $2.68 increased (but not above $5.36) by $0.11 for each percentage point by which the total annual energy and power costs for the building are certified to be reduced by a percentage greater than 25 percent.',
        link: '#',
        image: imageThree,
        date: '24 March, 2022'
    },
    {
        id: 4,
        name: 'The Inflation Reduction Act extended certain energy related tax breaks and indexed for inflation the energy efficient commercial buildings deduction beginning with tax year 2023. For tax year 2023, the applicable dollar value used to determine the maximum allowance of the deduction is $0.54 increased (but not above $1.07) by $0.02 for each percentage point by which the total annual energy and power costs for the building are certified to be reduced by a percentage greater than 25 percent. The applicable dollar value used to determine the increased deduction amount for certain property is $2.68 increased (but not above $5.36) by $0.11 for each percentage point by which the total annual energy and power costs for the building are certified to be reduced by a percentage greater than 25 percent.',
        link: '#',
        image: imageFour,
        date: '24 March, 2022'
    }
];

const TrendingPost = () => {
    return (
        <aside className="widget widget-trend-post">
            <h3 className="widget-title"><span>Trend News</span></h3>

            {
                trendingPosts?.map(post => {
                    return (
                        <div key={post?.id} className="tr-post">
                            <Link to={post?.link}>
                                <img src={post?.image} alt="" />
                            </Link>
                            <h5><Link to={post?.link}>{post?.name}</Link>
                            </h5>
                            <span><i className="fa fa-calendar-alt"></i>24 March, 2022</span>
                        </div>
                    )
                })
            }
        </aside>
    );
};

export default TrendingPost;