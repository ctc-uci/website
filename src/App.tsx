import { Center } from "@chakra-ui/react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AboutPage } from "./components/about/AboutPage";
import { ApplyPage } from "./components/apply/ApplyPage";
import { CatchAll } from "./components/CatchAll";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { LandingPage } from "./components/landing/LandingPage";
import { ProjectsPage } from "./components/projects/ProjectsPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { WorkWithUsPage } from "./components/work-with-us/WorkWithUsPage";
import { MAX_WIDTH } from "./styles/shared";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />

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
            path="/work-with-us"
            element={<WorkWithUsPage />}
          />
          <Route
            path="/apply"
            element={<ApplyPage />}
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
