import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <form>
      <button  className="text-black p-2 cursor-pointer">{children}</button>
    </form>
  );
}

export default Button;
