import React from "react";

const FormData = React.forwardRef((props, ref) => {
  return (
    <>
      <form onSubmit={props.onAddItem}>
        <div className="amount">
          <label htmlFor={props.id}>Amount</label>
          <input ref={ref} type="number" id={props.id} {...props.input} />
        </div>
        <button type="submit">+ Add</button>
      </form>
    </>
  );
});

export default FormData;
