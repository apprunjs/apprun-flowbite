import { app, Component } from 'apprun';
import Test from './test';
export default class ContactComponent extends Component {
  state = 'This is an AppRun Component';
  view = state => <div>
    <h2>{state}</h2>
    <Test />
  </div>;
}

