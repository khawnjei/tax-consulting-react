import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menus = [
    {
        id: 1,
        linkText: 'Home',
        icon: 'angle-down',
        link:'/',
        // submenu: [
        //     // {
        //     //     id: 7,
        //     //     link: '/',
        //     //     linkText: 'Home One'
        //     // },
        //     // {
        //     //     id: 8,
        //     //     link: '/',
        //     //     linkText: 'Home Two'
        //     // },
        //     // {
        //     //     id: 9,
        //     //     new: true,
        //     //     link: '/',
        //     //     linkText: 'Home Three'
        //     // },
        //     // {
        //     //     id: 10,
        //     //     link: '/',
        //     //     linkText: 'Home Four'
        //     // },
        // ]
    },
    {
        id: 2,
        linkText: 'About',
        link: '/about'
    },
    {
        id: 3,
        linkText: 'Services',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 11,
                link: '/service',
                linkText: 'Service Page'
            },
            {
                id: 12,
                link: '/single-service',
                linkText: 'Service Details'
            },
        ]
    },
    {
        id: 4,
        linkText: 'Portfolios',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 13,
                link: '/portfolio',
                linkText: 'Portfolio',
            },
            {
                id: 14,
                link: '/single-portfolio',
                linkText: 'Single Portfolio',
            },
        ]
    },
    // {
    //     id: 5,
    //     linkText: 'News',
    //     child: true,
    //     icon: 'angle-down',
    //     submenu: [
    //         {
    //             id: 15,
    //             link: '/news',
    //             linkText: 'News'
    //         },
    //         {
    //             id: 16,
    //             link: '/single-news',
    //             linkText: 'News Details'
    //         },
    //     ]
    // },
    {
        id: 6,
        linkText: 'Contact',
        link: '/contact'
    },
];

const MainMenu = () => {
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(0);
    const handleShowHideOnMobileMenu = (id) => {
        if (showMobileSubmenu === 0) {
            setShowMobileSubmenu(id);
        } else {
            setShowMobileSubmenu(0);
        }

    }

    return (
        <ul className="navbar-nav">

            {menus.length > 0 ? menus.map((item, i) => (
                <li key={i}
                    onClick={() => handleShowHideOnMobileMenu(item?.id)}
                    className={`${item.child ? 'dropdown' : ''} nav-item`}>
                    {item.child ? <NavLink onClick={e => e.preventDefault()} to="/"
                        className="menu-dropdown nav-link"
                        data-toggle="dropdown">{item.linkText}
                    </NavLink>
                        : <NavLink to={item.link} className="nav-link"
                            data-toggle="dropdown" aria-expanded="true">{item.linkText}

                        </NavLink>}

                    {item.child ?
                        <ul className={`dropdown-menu ${showMobileSubmenu === item?.id ? 'show' : ''}`} role="menu">
                            {item.submenu.map((sub_item, i) => (
                                <li key={i}>
                                    {sub_item.child ?
                                        <NavLink onClick={e => e.preventDefault()}
                                            to="/">{sub_item.linkText}</NavLink>
                                        : <NavLink
                                            to={sub_item.link} className="dropdown-item" >{sub_item.linkText}</NavLink>}

                                </li>
                            ))}
                        </ul>
                        : null
                    }
                </li>
            )) : null}
        </ul>
    );
};

export default MainMenu;