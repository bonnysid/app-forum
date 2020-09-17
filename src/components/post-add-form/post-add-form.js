import React from 'react';
import './post-add-form.css';

function addItem(data) {
    
}

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                className="form-control new-post-label"
                type="text"
                placeholder="What are you thinking?"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={addItem()}
            >
                Add
            </button>
        </form>
    )
}

export default PostAddForm;