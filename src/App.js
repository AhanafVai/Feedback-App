import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FeedbackForm from "./components/FeedbackForm.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import Header from "./components/Header.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.jsx";

import AboutPages from "./Pages/AboutPages.jsx";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPages />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};
Header.defaultProps = {
  text: "This is default",
};
export default App;
