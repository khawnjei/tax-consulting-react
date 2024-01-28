import React from 'react';
import { Route } from 'react-router-dom';
import FooterOne from '../../components/Footers/FooterOne/FooterOne';
import HeaderOne from '../../components/Headers/HeaderOne/HeaderOne';

const ThemeRoute = ({ children, theme, ...rest }) => {
    return (
        <>
            {
                theme === 'theme-1' &&
                <>
                    {/* Header Section */}
                    <HeaderOne />
                </>
            }
            <Route
                {...rest}
            // render={() => (
            //     children
            // )}
            />

            {
                theme === 'theme-1' &&
                <>
                    <FooterOne />
                </>
            }
        </>

    );
};

export default ThemeRoute;