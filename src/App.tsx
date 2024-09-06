import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import { CatchAll } from "./components/CatchAll";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Hero />}
        />

        {/* <Route
          path="*"
          element={<CatchAll />}
        /> */}
      </Routes>
    </Router>
  );
};
