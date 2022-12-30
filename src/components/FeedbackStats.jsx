// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate Rating average
  let totalRating = feedback.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.rating;
  }, 0); // 0 is the default value of the accumulator

  let average = totalRating / feedback.length;
  //Format the average correctly
  average = average.toFixed(1).replace(/[.,]0$/, "");

  console.log(average);

  const reviewText = (feedBackLength) =>
    feedBackLength > 1
      ? `${feedBackLength} Reviews`
      : `${feedBackLength} Review`;
  return (
    <div className="feedback-stats">
      {/* <h4> Reviews</h4> */}
      <h4>{reviewText(feedback.length)}</h4>
      {/* Show 0 when is not a number, otherwise show the average */}
      <h4>Average rating {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };
export default FeedbackStats;
