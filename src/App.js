import { Provider } from "react-redux";
import { Store } from "./Component/Store";
import { Routing } from './Component/Routing';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <Routing />
      </Provider>
    </div>
  );
}

export default App;
