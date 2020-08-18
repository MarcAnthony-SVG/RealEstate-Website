import React from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
const BedAndBath = (props) => {
  return (
    <div>
      <div>
        Bedrooms
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="primary">Any</Button>
            <Button variant="outline-secondary">1+</Button>
            <Button variant="outline-secondary">2+</Button>
            <Button variant="outline-secondary">3+</Button>
            <Button variant="outline-secondary">4+</Button>
            <Button variant="outline-secondary">5+</Button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
      <div>
        Bathrooms
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="primary">Any</Button>
            <Button variant="outline-secondary">1+</Button>
            <Button variant="outline-secondary">1.5+</Button>
            <Button variant="outline-secondary">2+</Button>
            <Button variant="outline-secondary">3+</Button>
            <Button variant="outline-secondary">4+</Button>
          </InputGroup.Prepend>
        </InputGroup>
        
        <Button variant="outline-secondary">Done</Button>

      </div>
    </div>
  );
};

export default BedAndBath;
