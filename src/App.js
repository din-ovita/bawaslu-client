import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./views/pages/Home";
import SertaMerta from "./views/pages/informasi/SertaMerta";
import PermintaanInformasi from "./views/pages/informasi/PermintaanInformasi";
import './css/style.css';
import Profil from "./views/pages/Profil";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profil" component={Profil} exact />
          <Route path="/serta-merta" component={SertaMerta} exact />
          <Route path="/permintaan" component={PermintaanInformasi} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
