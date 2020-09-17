import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import styles from './App.module.scss';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const App = () => {

    const data = [
        {id: "sgdhj", label: "Going to learn React", important: false},
        {id: "qwtqt", label: "Hello world", important: false},
        {id: "sddah", label: "How are you?", important: true}
    ];

    return (
        <AppBlock>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm posts={data}/>  
        </AppBlock>

    );
}

export default App;