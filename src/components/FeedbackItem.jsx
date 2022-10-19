import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

const FeedbackItem = ({ item, handleFeedback }) => {
  const reverse = true;
  return (
    <Card reverse={reverse}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
