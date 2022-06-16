import { useState } from "react";
import "./CourseInput.css";
import Button from "../../UI/Button/Button";

export default CourseInput = (props) => {
  const [enetredValue, setEnteredValue] = useState("");
  const goalInputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(enetredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          value={enetredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit"> Add Goal </Button>
    </form>
  );
};
