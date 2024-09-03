import './style.css';

import app from 'apprun';
import Layout from './components/layout'
import Comic from './components/comic';

declare var WebSocket: any;

export default () => {

  // if (WebSocket) { // WebSocket is only on the client side
  //   const protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
  //   const address = protocol + window.location.host + window.location.pathname + '/ws';
  //   const ws = new WebSocket(address);
  //   ws.onmessage = function (msg) {
  //     const res = JSON.parse(msg.data);
  //     app.run('res:', res);
  //   }
  //   app.on('req:', (req) => {
  //     ws.send(JSON.stringify(req));
  //   });
  //   app.on('res:', p => console.log(p));
  // }

  app.webComponent('ws-comic', Comic);
  app.render(document.getElementById('root'), <Layout />);

}

