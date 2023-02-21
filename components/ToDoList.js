import { useState } from "react";
import TDleft from "./TDLEFT";

export default function HomePage() {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div>
      <button className="underline-offset-1" onClick={toggleDropdown}>To-do</button>
      {showDropdown && (
        <div>
            <p>fjfjfjf</p>
            <button></button>
           




            
        </div>
      )}
    </div>
  );
}