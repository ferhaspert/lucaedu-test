import React from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <>
      <div className="logo">
        <img src="/luca_logo_color.svg" />
      </div>
      <div className="sidebar">
        <SidebarItem title="Inicio" icon="home" />
        <SidebarItem title="Mis cursos" icon="video" />
        <SidebarItem title="Quizzes" icon="notification" />
        <SidebarItem title="Mi plan de estudios" icon="studyplan" />
        <SidebarItem selected title="Comunidad" icon="community" />
        <SidebarItem title="Centro de ayuda" icon="help" />
      </div>
    </>
  );
}
