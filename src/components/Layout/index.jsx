// Utils
import PropTypes from "prop-types";
// Styles
import "./index.scss";

const Layout = ({ cssClass, children }) => {
  return <main className={cssClass ? cssClass : null}>{children}</main>;
};

Layout.propTypes = {
  cssClass: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
