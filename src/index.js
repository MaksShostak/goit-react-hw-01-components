import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// console.log(React.createElement);
// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'Ссылка на reactjs.org'
// );
// console.log(link);
// const image = React.createElement('img', {
//   src: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });
// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', null, image, title, price, button);
// console.log(product);
