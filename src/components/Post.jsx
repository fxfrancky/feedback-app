// import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  // const params = useParams();
  const navigate = useNavigate();

  const onClick = () => {
    console.log("Hello");
    navigate("/about");
  };
  const status = 200;
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div>
      <h1>Post ID :</h1>
      <button onClick={onClick}>Click</button>
      {/* <p>Post Name: {params.name}</p> */}
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
