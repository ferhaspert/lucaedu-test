import React, { useState, useEffect } from "react";
import useCheckMobileScreen from "../utils/pageWidth";

export default function SidebarItem({ title, selected, icon }) {
  const [isMobile, _] = useState(useCheckMobileScreen());

  return (
    <li
      className={`item${selected ? " selected" : ""} ${
        isMobile ? "isMobile" : "isDesktop"
      }`}
    >
      <div className="content">
        <img src={`/icons/${icon}.svg`} alt={icon} />
        {!isMobile && <p>{title}</p>}
      </div>
    </li>
  );
}
