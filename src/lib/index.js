import { useState } from "react";
import "./style.css";

const StaterComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="display">{count}</div>
      <div>
        <div className="button" onClick={() => setCount(count - 1)}>
          -
        </div>
        <div className="button" onClick={() => setCount(count + 1)}>
          +
        </div>
      </div>
    </div>
  );
};

export default StaterComponent;
