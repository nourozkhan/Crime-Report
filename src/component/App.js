import React from 'react';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
  render() {
    return (

      <div>
        <AppBar
          title="MY APP"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        {this.props.children}
      </div>
    );
  }
}

export default App;
