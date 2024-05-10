const WelcomeMesg = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no Post</h1>;
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Get Posts From Server
      </button>
    </center>
  );
};

export default WelcomeMesg;
