import { Switch } from "react-router-dom";
import Route from './Route';
import MensagemList from '../components/MensagemList/MessageList'

export default function Routes() {
  return (
    <Route>
      <Switch>
        <Route path="/:id" exact component={MensagemList} />
      </Switch>
    </Route>
  );
}
