import React from "react";


function InfoBar({children}) {
  return (
    <div className="w-full border border-slate-600 rounded-lg flex items-center justify-between p-4">
      {children}
    </div>
  );
}

export default InfoBar;
