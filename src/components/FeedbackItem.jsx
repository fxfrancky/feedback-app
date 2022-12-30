// import { useState } from "react";
import Card from "./shared/Card";
// import PropTypes from "prop-types";
//Import an icon from react-icons/fa : Font awesome
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedBack, editFeedBack } = useContext(FeedbackContext);
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This is an example of feedback item param");
  // const handleClick = () => {
  //   setRating((previousRating) => {
  //     // return Math.ceil(Math.random() * 10);
  //     return previousRating + 1;
  //   });
  // };
  // function handleClick(itemID) {
  //   console.log(`${item.id}`);
  // }
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedBack(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedBack(item)}>
        <FaEdit color="purple" />
      </button>
      {/* onClick={() => updateFeedBack(item.id)} */}
      {/* onClick={() => editFeedBack(item.id)} */}
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired,
// };
export default FeedbackItem;
