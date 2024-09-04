import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { CatchAll } from "./components/CatchAll";
import { Hero } from "./components/hero/Hero";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero />} />

                <Route path="*" element={<CatchAll />} />
            </Routes>
        </Router>
    );
};

export default App;
