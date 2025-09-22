import { Center } from "@chakra-ui/react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AboutPage } from "./components/about/AboutPage";
import { ApplyPage } from "./components/apply/ApplyPage";
import { CareerPage } from "./components/career/CareerPage";
import { CatchAll } from "./components/CatchAll";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { LandingPage } from "./components/landing/LandingPage";
import { ProjectsPage } from "./components/projects/ProjectsPage";
import { RecruitmentPage } from "./components/recruitment/RecruitmentPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { TeamPage } from "./components/team/TeamPage";
import { WorkWithUsPage } from "./components/work-with-us/WorkWithUsPage";
import { MAX_WIDTH, MIN_HEIGHT } from "./styles/shared";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Header />
      <Center
        sx={{
          maxWidth: MAX_WIDTH,
          width: "100%",
          minHeight: MIN_HEIGHT,
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
            path="/team"
            element={<TeamPage />}
          />
          <Route
            path="/career"
            element={<CareerPage />}
          />
          <Route
            path="/recruitment"
            element={<RecruitmentPage />}
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
