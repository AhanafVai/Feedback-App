import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackForm from "./components/FeedbackForm.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import Header from "./components/Header.jsx";
import FeedbackData from "./data/FeedbackData.js";

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
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAddFeedback={handleAddFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleFeedback={deleteFeedbackData} />
      </div>
    </>
  );
};
Header.defaultProps = {
  text: "This is default",
};
export default App;
