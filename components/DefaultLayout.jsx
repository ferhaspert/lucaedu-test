import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Container, Row } from "reactstrap";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="sidebar-layout">{children}</div>
    </>
  );
}
