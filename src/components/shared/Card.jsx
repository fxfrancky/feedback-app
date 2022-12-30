import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // If reverse is true, add the className 'reverse'
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  //Reverse styling. contiditional styling if reverse is true
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#ffff",
        color: reverse ? "#ffff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
