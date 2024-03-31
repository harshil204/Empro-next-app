const errorMessage = ({ children }) => {
  return (
    <span style={{ color: "#DC0000", fontFamily: "quicksand" }}>
      {children}
    </span>
  );
};

export default errorMessage;
