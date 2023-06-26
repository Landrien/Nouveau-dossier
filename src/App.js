import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connecter from './FrontEnd/Page/Connecter/Connecter';
import Inscription from './FrontEnd/Page/Inscription/Inscription';

function App() {
  return (

      <Connecter/>

  );
}

export default App;
/*<Router>
        < Routes>
          <Route exact path="/Connecter" component={Connecter} />
          <Route path="/Inscription" component={Inscription} />
        </Routes>
      </Router>*/