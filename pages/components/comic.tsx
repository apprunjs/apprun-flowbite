import { app, Component } from 'apprun';
import get_a_comic  from '../../_/comic';


export default class Comic extends Component {

  state = get_a_comic;

  view = ({ img }) => img ? <>
    <img src={img} />
    <div><button $onclick={get_a_comic}>Get a new one</button></div>
  </> : `Loading...`;
}