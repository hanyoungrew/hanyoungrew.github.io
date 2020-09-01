import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import React from 'react';


function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />;

    return <div onClick={clickFunction}>{icon}</div>;
}

export default Arrow