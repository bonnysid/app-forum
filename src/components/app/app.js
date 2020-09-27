/* eslint-disable default-case */
import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
// import styles from './App.module.scss';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {id: 1, label: "Going to learn React", important: false, like: false},
                {id: 2, label: "Hello world", important: false, like: false},
                {id: 3, label: "How are you?", important: false, like: false}
            ],
            term: '',
            filter: 'all',
        }
        this.lastId = 4;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    searchPost(items, term) {
        if (term.length === 0 ) return items;
        
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) !== -1;
        })

    }

    filterPosts(items, filter) {
        switch (filter) {
            case 'like': return items.filter(item => item.like);
            case 'all': return items;
            default: return items;
        }
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.lastId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    toggleProperty(id, property) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            old[property] = !old[property];
            const newArr = [...data.slice(0, index), old, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.toggleProperty(id, `important`);
    }

    onToggleLiked(id) {
        this.toggleProperty(id, `like`);
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm 
                    posts={this.state.data}
                    onAdd={this.addItem}
                />  
            </AppBlock>
        );
    }
}
