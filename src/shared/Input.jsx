import React from "react";

const Input = (props) => {
  const onChangeHandler = (e) => {
    //     console.log(e.target.value);
    const data = e.target.value || "";
    props.onChange(data);
  };
  return (
    <div>
      {/* <input
        type={props.type}
        placeholder={props.placeholder}
        className="input w-full max-w-xs border-none"
      /> */}
      <input
        {...props}
        className="input w-full max-w-xs border-none"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;
