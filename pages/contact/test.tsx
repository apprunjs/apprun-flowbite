import { app, Component } from 'apprun';

export default class extends Component {
  state = 'sub component'

  view = state => <>
    <div>
      {state}
    </div>
  </>
  update = {
  }
}