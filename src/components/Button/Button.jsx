import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.scss";

const PtmButton = ({
  id,
  name,
  type,
  disabled,
  handlePress,
  buttonInlineStyle,
  children,
  appearance,
  className,
  ...props
}) => {
  const buttonStyles = classNames(styles.button, {
    [styles.button_primary]: appearance === "primary",
    [styles.button_disabled]: disabled,
    [className]: className,
  });

  return (
    <button
      id={id}
      name={name}
      disabled={disabled}
      style={buttonInlineStyle}
      className={buttonStyles}
      type={type}
      onClick={handlePress}
      {...props}
    >
      {children}
    </button>
  );
};

PtmButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  handlePress: PropTypes.func,
  buttonInlineStyle: PropTypes.instanceOf(Object),
  appearance: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};

PtmButton.defaultProps = {
  id: "",
  name: "",
  type: "button",
  disabled: false,
  handlePress: () => {},
  buttonInlineStyle: {},
  appearance: "",
  className: null,
};

export default PtmButton;
