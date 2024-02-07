import moment from "moment";
import "./TopNav.css";

const TopNav = () => {
  return (
    <>
      <div className="text-6xl text-center py-3">
        <h1 className="text-success fw-bold">Khajuria</h1>
        <h2 className="text-secondary fw-light ">বৃহত্তর খাজুরিয়া গ্রাম </h2>
      </div>
      <p className="text-center fw-light fs-6">
        <span className="badge text-bg-success">
          {moment().format("dddd, MMMM Do YYYY, h:mm a")}
        </span>
      </p>
    </>
  );
};

export default TopNav;
