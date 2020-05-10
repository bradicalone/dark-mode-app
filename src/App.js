import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import configureStore from './store/configureStore';
import './styles/styles.css';


const store = configureStore()

//Store to all of our components
const jsx = (
    <Provider store={store}>
        {(() => {
            return <Navigation />
        })()}
        
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

