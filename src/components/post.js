'use struct'

import React, { PropTypes } from 'react';
import Timestamp from 'react-timestamp'

const Post = ({ arraySubreddit, imgDefault, initPost }) => (
    <section className="container">
        {arraySubreddit.slice(0, initPost).map((resp, index) => (
            <a className='contPost' href={`https://www.reddit.com/${resp.url}`} target="_blank" key={index}>
                <div className='post' >
                    <div className='thumb'>
                        <img src={
                            resp.imgThumb.indexOf('.jpg') > -1 == true ? resp.imgThumb : imgDefault} />
                    </div>
                    <div className='textPost'>
                        <p className='title'>{resp.title}</p>
                        <p className='corTime'>
                            enviado as {<Timestamp time={resp.date} precisio={1} />} por <span className='corUser'>{resp.userid}</span>
                        </p>
                        <p className='dominio'>{resp.domain}</p>
                    </div>
                </div>
            </a>

        ))}
    </section>
);

Post.propTypes = {
    arraySubreddit: PropTypes.array.isRequired,
    initPost: PropTypes.number.isRequired,
    imgDefault: PropTypes.string.isRequired
}

export default Post;