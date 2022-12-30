import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Set FeedBack Item to be updated
  const editFeedBack = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Function to delete a feedBack
  const deleteFeedBack = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete this element ?")) {
      //Delete the element
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Function to add a Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    //add the newFeedback into the array of existing feedback
    setFeedback([newFeedback, ...feedback]);
  };

  // Update a feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedBack,
        addFeedback,
        editFeedBack,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
