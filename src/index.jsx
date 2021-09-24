import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ResetStyle from './styled/ResetStyle';
import theme from './styled/theme';
import { store } from './states/store';
import swDev from "./swDev"

// @ts-ignore
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
swDev();