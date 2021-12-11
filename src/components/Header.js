import React from "react";

import Button from "./Button";

// import PropTypes from "prop-types";

const Header = ({ title = "Task Tracker", toggleShow, showAddTask }) => {
  const handleClick = () => {
    console.log("Click with handleClick from Header");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        handleClick={handleClick}
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </header>
  );
};
// const Header = ({title}) => {
//   return (
//     <header>
//       <h1>{title}</h1>
//     </header>
//   );
// };

//Default Props
// Header.defaultProps = {
//   title: "Task Tracker",
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };
export default Header;
