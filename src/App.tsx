import { Center } from "@chakra-ui/react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AboutPage } from "./components/about/AboutPage";
import { CatchAll } from "./components/CatchAll";
import { ContactPage } from "./components/contact/ContactPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { LandingPage } from "./components/landing/LandingPage";
import { ProjectsPage } from "./components/projects/ProjectsPage";
import { MAX_WIDTH } from "./styles/shared";

export const App = () => {
  return (
    <Router>
      <Header />
      <Center
        sx={{
          maxWidth: MAX_WIDTH,
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
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="*"
            element={<CatchAll />}
          />
        </Routes>
      </Center>
      <Footer />
    </Router>
  );
};
