import "./assets/css/plugins/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import "./assets/scss/style.scss";


import Router from "./Router/routes";
function App() {
  return (
    <div className="App overflow-hidden">
      <Router />
    </div>
  );
}

export default App;
