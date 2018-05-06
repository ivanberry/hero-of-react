import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostList from './chapter2_component/PostList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PostList />, document.getElementById('root'));
registerServiceWorker();
