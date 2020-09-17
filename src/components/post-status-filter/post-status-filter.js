import React from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';


const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color="info">Все</Button>
            <Button color="info">All</Button>
            <Button outline color="secondary">Likes</Button>
        </div>
    );
}

export default PostStatusFilter;