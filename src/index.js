import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { store, history} from './store';

// import './styles/index.css';
// import './assets/plugins/bootstrap/css/bootstrap.min.css';
// import './assets/plugins/font-awesome/css/font-awesome.min.css';
// import './assets/fonts/style.css';
// import './assets/css/main.css';
// import './assets/css/main-responsive.css';
// import './assets/plugins/iCheck/skins/all.css';
// import './assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css';
// import './assets/plugins/perfect-scrollbar/src/perfect-scrollbar.css';
// import './assets/css/theme_light.css';
//import './assets/css/print.css';


//aaa

import App from './components/App';

ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
        <Route path="/" component={App} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  
  ), document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
