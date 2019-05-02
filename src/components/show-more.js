'use struct'

import React, {PropTypes} from 'react';

const ShowMore = ({exibmornews, expanded} ) => (
    
    <div className='actions'>
        <button className='show' onClick={exibmornews}>{!!expanded ? '- ver menos' : '+ ver mais'}</button>
    </div>
)

ShowMore.propTypes = {
    exibmornews : PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired
}

export default ShowMore;