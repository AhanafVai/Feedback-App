import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleFeedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback</p>;
  }
  return (
    <div>
      <div className="feedback-list">
        {feedback.map((item) => (
          <FeedbackItem
            key={item.id}
            item={item}
            handleFeedback={handleFeedback}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
