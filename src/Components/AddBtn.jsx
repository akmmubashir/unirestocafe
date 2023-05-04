import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/ReduxChild";

function AddBtn() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   if (count===0) {
  //     setCount(count);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <div className="d-inline-flex align-items-center count-btn">
      <button className="id-btn" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button className="id-btn">{count}</button>

      <button className="id-btn" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  //   <div className="d-inline-flex align-items-center count-btn">
  //   <button
  //     className="id-btn"
  //     onClick={decrementCount}
  //   >
  //     -
  //   </button>
  //   <button className="id-btn">{count}</button>

  //   <button
  //     className="id-btn"
  //     onClick={incrementCount}
  //   >
  //     +
  //   </button>
  // </div>
  );
}

export default AddBtn;
