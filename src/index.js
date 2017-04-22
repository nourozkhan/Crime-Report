import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import './config';
import store from "./store/index";
import {Provider} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(

  <MuiThemeProvider>
   <Provider store={store}>
      {routes}
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
