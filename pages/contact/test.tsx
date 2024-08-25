import { app, Component } from 'apprun';
import Comic from '../../components/comic';

export default class extends Component {
  state = 'sub component'

  view = state => <>
    <div>
      {state}
      <Comic />
    </div>
  </>
  update = {
  }
}