export const CardWrapper = ({ title, children }) => {
  return (
    <>
      <div id="userInfo">
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </>
  );
};
