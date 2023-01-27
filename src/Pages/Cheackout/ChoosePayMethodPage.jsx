import React from "react";
import { Container } from "react-bootstrap";
import ChoosePayMethod from "../../Components/Checkout/ChoosePayMethod";

export default function ChoosePayMethodPage() {
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container>
          <ChoosePayMethod />
        </Container>
      </div>
    </>
  );
}
