//import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes/routes";
import Loading from "./components/Loading/Loading";
import ThemeRoute from "./routes/ThemeRoute/ThemeRoute";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {routes?.map((route, index) => {
            return (
              <ThemeRoute
                key={index}
                name={route.name}
                exact={route.exact}
                path={route.path}
                theme={route.theme}
                component={route.component}
              >
                {route.component}
              </ThemeRoute>
            );
          })}
        </Switch>
      </Router>
      <a
        href="https://wa.me/14692378402"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </Suspense>
  );
}

export default App;
