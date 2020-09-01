import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import IconButton from '@material-ui/core/IconButton';


import React from 'react';


function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />;

    return <IconButton onClick={clickFunction}>{icon}</IconButton>;
}

export default Arrow