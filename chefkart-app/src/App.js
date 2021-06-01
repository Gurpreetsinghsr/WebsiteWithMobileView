import MobileFrame from "./components/mobileViewComponent/mobileFrame";
import { Route, Switch } from "react-router-dom";
import InsideThePhone from "./components/mobileViewComponent/insideThePhone/insideThePhone";

function App() {
  return (
    <Switch>
      <Route path="/main" exact component={InsideThePhone}></Route>
      <Route path="/" exact component={MobileFrame}></Route>
    </Switch>
  );
}

export default App;
