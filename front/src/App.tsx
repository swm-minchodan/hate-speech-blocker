import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import YoutubePreview from './pages/YoutubePreview';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/preview" exact component={YoutubePreview} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
