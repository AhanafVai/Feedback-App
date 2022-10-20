import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";

const FeedbackItem = ({ item }) => {
  const { deleteFeedbackData } = useContext(FeedbackContext);
  const reverse = true;
  return (
    <Card reverse={reverse}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedbackData(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
