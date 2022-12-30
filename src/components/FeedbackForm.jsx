import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setTBtnDisabled] = useState(true);
  const [message, setTMessage] = useState("");
  const [rating, setTRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setTBtnDisabled(false);
      setTRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      // Select the item to edit
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        // Add a new FeedBack
        addFeedback(newFeedback);
      }

      //Clear the text after submit
      setText("");
    }
  };

  const handleTextChange = (e) => {
    //Case Empty text
    if (text === "") {
      setTBtnDisabled(true);
      setTMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setTBtnDisabled(true);
      setTMessage("Text must be at least 10 characters");
    } else {
      setTMessage(null);
      setTBtnDisabled(false);
    }
    setText(e.target.value);

    // e.target.value.length > 9 ? setTBtnDisabled(false) : setTBtnDisabled(true);
    // console.log(e.target.value);
    console.log(
      `Btn Disabled value is ${btnDisabled} and the text length is ${text.length}`
    );
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service here ?</h2>
        <RatingSelect select={(rating) => setTRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {/* If a message exist then display it in a div */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
