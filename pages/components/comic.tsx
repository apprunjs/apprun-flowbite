import { app, Component } from 'apprun';
import  action  from '../action';

const get_a_comic = () => action('/api/comic');

export default class Comic extends Component {
  // state = async () => {
  //   const response = await fetch('/api/comic', { method: 'POST',  });
  //   return response.json();
  // }

  state = get_a_comic;

  view = ({ img }) => img ? <>
    <img src={img} />
    <div><button $onclick={get_a_comic}>Get a new one</button></div>
  </> : `Loading...`;
}