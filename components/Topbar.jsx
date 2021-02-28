import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import useCheckMobileScreen from "../utils/pageWidth";

export default function Topbar() {
  const isMobile = useState(useCheckMobileScreen());

  return (
    <Container className="topbar">
      <Row>
        {!isMobile && (
          <Col className="column search" xs="4">
            <img src="/dropdown.svg" alt="dropdown" />
            <img src="/icons/union.svg" alt="dropdown" />
          </Col>
        )}
        {!isMobile && (
          <Col className="column actions" xs="4">
            <div className="action">
              <img src="/icons/fire_department.svg" alt="fire" />
              <p>0</p>
            </div>
            <div className="action">
              <img src="/icons/police.svg" alt="police" />
              <p>0</p>
            </div>
            <div className="action">
              <img src="/icons/florist.svg" alt="florist" />
              <p>0</p>
            </div>
          </Col>
        )}
        <Col className="column user" xs={`${isMobile ? 12 : 4}`}>
          <img src="/icons/bell.svg" alt="notification" />
          <img src="/icons/user.svg" alt="user" />
        </Col>
      </Row>
    </Container>
  );
}
