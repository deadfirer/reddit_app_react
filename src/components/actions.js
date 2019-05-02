'use strict'

import React , { PropTypes }from 'react';

const Actions = ({ getHot , getNews , getRising , activebt}) => (
    
    <div className='actions'>
        <button className={ activebt=='hot' ? 'active' : '' } onClick={getHot}>hot</button>
        <button className={ activebt=='new' ? 'active' : '' } onClick={getNews}>news</button>
        <button className={ activebt=='rising' ? 'active' : '' } onClick={getRising}>rising</button>
    </div>
);

Actions.propTypes = {
    getHot : PropTypes.func.isRequired,
    getNews : PropTypes.func.isRequired,
    getRising : PropTypes.func.isRequired,
    activebt : PropTypes.string.isRequired
}


export default Actions;