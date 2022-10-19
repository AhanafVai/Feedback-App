import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList.jsx";
import Header from "./components/Header.jsx";
import FeedbackData from "./data/FeedbackData.js";

const App = () => {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const deleteFeedbackData = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList
          feedback={feedbackData}
          handleFeedback={deleteFeedbackData}
        />
      </div>
    </>
  );
};
Header.defaultProps = {
  text: "This is default",
};
export default App;
