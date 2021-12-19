import React from 'react';
import PoemCard from './PoemCard';

const Poems = ({ poems }) => {
    return (
        <div>
            {
                (poems || []).map(({ title, excerpt, id }) => (
                    < PoemCard key={id} title={title} excerpt={excerpt} poemId={id} />
                ))
            }
        </div>
    );
}

export default Poems;