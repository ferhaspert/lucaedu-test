import React, { useState, useEffect } from "react";
import useCheckMobileScreen from "../utils/pageWidth";
import window from "global";

export default function SidebarItem({ title, selected, icon }) {
  const isMobile = useState(useCheckMobileScreen());

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
