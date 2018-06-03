import './App.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PostsMain from './PostsMain';
import PostDetail from './PostDetail';
import NavigationBar from './NavigationBar';
import EditPost from './EditPost';
import DeletePost from './DeletePost';
import AddPost from './AddPost';
import AddComment from './AddComment';
import EditComment from './EditComment';
import DeleteComment from './DeleteComment';
import NotFound from './NotFound';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={() => <PostsMain />} />
          <Route exact path='/:category' component={(props) => <PostsMain {...props} /> } />
          <Route exact path='/:category/:post_id' component={(props) => <PostDetail {...props} /> } />
          <Route path='/add/post/new' component={AddPost} />
          <Route exact path='/:category/edit/:post_id' component={(props) => <EditPost {...props} /> } />
          <Route exact path='/:category/delete/:post_id' component={(props) => <DeletePost {...props} /> } />
          <Route exact path='/:category/:post_id/comments/new' component={AddComment} />
          <Route exact path='/:category/:post_id/edit/comment/:comment_id' component={(props) => <EditComment {...props} /> } />
          <Route exact path='/:category/:post_id/delete/comment/:comment_id' component={(props) => <DeleteComment {...props} /> } />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;