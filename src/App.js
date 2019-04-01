import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import AppWrapper, { AppContent } from './AppWrapper';

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <AppContent>
          <Editor />
          <Preview />
        </AppContent>
      </AppWrapper>
    );
  }
}

export default App;
