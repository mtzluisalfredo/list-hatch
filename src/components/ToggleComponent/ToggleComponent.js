const ToggleComponent = ({
  condition = false,
  principal = () => {},
  secondary = () => {},
}) => {
  if (condition) {
    return principal();
  }

  return secondary();
};

export default ToggleComponent;
