import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FeedbackForm from "./components/FeedbackForm.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import Header from "./components/Header.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.jsx";
import FeedbackData from "./data/FeedbackData.js";
import AboutPages from "./Pages/AboutPages.jsx";

const App = () => {
  const [feedback, setFeedbackData] = useState(FeedbackData);

  const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbackData([newFeedback, ...feedback]);
  };

  const deleteFeedbackData = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbackData(feedback.filter((item) => item.id !== id));
    }
  };
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
                  <FeedbackForm handleAddFeedback={handleAddFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleFeedback={deleteFeedbackData} />
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
