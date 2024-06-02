// Utils
import PropTypes from "prop-types";
// Styles
import "./index.scss";

const MainWrapper = ({ cssClass, children }) => {
  return <main className={cssClass ? cssClass : null}>{children}</main>;
};

MainWrapper.propTypes = {
  cssClass: PropTypes.string,
  children: PropTypes.node,
};

export default MainWrapper;
