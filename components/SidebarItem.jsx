import React from "react";

export default function SidebarItem({ title, selected, icon }) {
  return (
    <li className={`item ${selected && "selected"}`}>
      <div className="content">
        <img src={`/icons/${icon}.svg`} alt={icon} />
        <p>{title}</p>
      </div>
    </li>
  );
}
