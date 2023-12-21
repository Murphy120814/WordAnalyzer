import React from "react";

function TextInputContainer({ textValue, setTextValue }) {
  return (
    <div className="w-full min-h-[300px] p-4">
      <textarea
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
        className="w-full min-h-[300px] p-4 bg-slate-300 rounded-xl shadow-sm"
        placeholder="Write here"
      ></textarea>
    </div>
  );
}

export default TextInputContainer;
