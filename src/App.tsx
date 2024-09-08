import { Center } from "@chakra-ui/react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AboutPage } from "./components/about/AboutPage";
import { Footer } from "./components/Footer";
// import { CatchAll } from "./components/CatchAll";
import { Header } from "./components/header/Header";
import { LandingPage } from "./components/landing/LandingPage";

export const App = () => {
  return (
    <Router>
      <Header />
      <Center
        sx={{
          maxWidth: 1500,
          width: "100%",
          marginX: "auto",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          {/* <Route
            path="*"
            element={<CatchAll />}
          /> */}
        </Routes>
      </Center>
      <Footer />
    </Router>
  );
};
