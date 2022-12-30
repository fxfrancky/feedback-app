//Main app component
// NB use className instead of class, and htmlFor instead of for in JSX
// class and for are 2 reserved word for javascript thats why
// import { useState } from "react";
import Header from "./components/Header";
// import Card from "./components/shared/Card";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // NavLink,
} from "react-router-dom";
// import FeedbackItem from "./components/FeedbackItem";
import FeedBackList from "./components/FeedBackList";
// import FeedBackData from "./data/FeedBackData";
// import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
// import Post from "./components/Post";
//To generate a unique id
// import { v4 as uuidv4 } from "uuid";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // const [feedback, setFeedback] = useState(FeedBackData);

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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedBackList />
                </>
              }
            >
              {/* <AboutPage /> */}
              {/* <Card>Hello F(x)</Card> */}
            </Route>

            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/*" element={<Post />} /> */}
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

//Export the function
export default App;

// handleDelete={(id) => console.log(id)}
