'user strict'

import React, { PropTypes } from 'react';
import Actions from './actions';
import Post from './post';
import ShowMore from './show-more';


const AppContent = ({ 
        getHot,
        getNews,
        getRising,
        arraySubreddit,
        imgDefault,
        initPost,
        exibmornews,
        activebt,
        expanded
    }) => (

    <div className='app'>
        
        <Actions 
           getHot = { getHot }  
           getNews = { getNews }
           getRising = { getRising }
           activebt = {activebt}
        />

        <Post 
            arraySubreddit = { arraySubreddit }
            initPost = { initPost }
            imgDefault = { imgDefault }        
        />

        <ShowMore 
            exibmornews = {exibmornews}
            expanded = { expanded }
         />

     </div> 

);

AppContent.propTypes = {
    getHot: PropTypes.func.isRequired,
    getNews: PropTypes.func.isRequired,
    getRising: PropTypes.func.isRequired,
    exibmornews: PropTypes.func.isRequired,
    arraySubreddit: PropTypes.array.isRequired,
    initPost: PropTypes.number.isRequired,
    expanded: PropTypes.bool.isRequired,
    imgDefault: PropTypes.string.isRequired,
    activebt: PropTypes.string.isRequired
}

export default AppContent;