import React from 'react';

const FontAwesome = ({name = '', ...rest}) => {
    return (
        <i {...rest} className={`fa fa-${name}`}/>
    );
};

export default FontAwesome;