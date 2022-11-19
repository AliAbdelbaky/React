import React from "react";
function ChildComponent(props) {
  const { greetHandeller } = props;
  return (
    <div>
      <button onClick={() => greetHandeller("child")}>
        I'm button from child component trigger func from parent
        {}
      </button>
    </div>
  );
}
export default ChildComponent;
