import { app, Component } from 'apprun';
import Comic from '../components/comic';

export default class extends Component {
  state = 'This is an AppRun sub component'

  view = state => <>
    {state}
    <Comic />
  </>;
}