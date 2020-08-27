import React from "react";
import PropTypes from "prop-types";
import { InputGroup, Button } from "react-bootstrap";

const BedAndBath = (props) => {
  return (
    <div>
      <div>
        Bedrooms
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button
              onClick={props.selectMinBath}
              value={"Any"}
              variant="primary"
            >
              Any
            </Button>
            <Button
              onClick={props.selectMinBath}
              value={1}
              variant="outline-secondary"
            >
              1+
            </Button>
            <Button
              onClick={props.selectMinBath}
              value={2}
              variant="outline-secondary"
            >
              2+
            </Button>
            <Button
              onClick={props.selectMinBath}
              value={3}
              variant="outline-secondary"
            >
              3+
            </Button>
            <Button
              onClick={props.selectMinBath}
              value={4}
              variant="outline-secondary"
            >
              4+
            </Button>
            <Button
              onClick={props.selectMinBath}
              value={5}
              variant="outline-secondary"
            >
              5+
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
      <div>
        Bathrooms
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button
              onClick={props.selectMaxBath}
              value={"Any"}
              variant="primary"
            >
              Any
            </Button>
            <Button
              onClick={props.selectMaxBath}
              value={1}
              variant="outline-secondary"
            >
              1+
            </Button>
            <Button
              onClick={props.selectMaxBath}
              value={1.5}
              variant="outline-secondary"
            >
              1.5+
            </Button>
            <Button
              onClick={props.selectMaxBath}
              value={2}
              variant="outline-secondary"
            >
              2+
            </Button>
            <Button
              onClick={props.selectMaxBath}
              value={3}
              variant="outline-secondary"
            >
              3+
            </Button>
            <Button
              onClick={props.selectMaxBath}
              value={4}
              variant="outline-secondary"
            >
              4+
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
        <Button variant="outline-secondary">Done</Button>
      </div>
    </div>
  );
};
BedAndBath.propTypes = {
  selectMinBath: PropTypes.func,
  selectMaxBath: PropTypes.func,
};

export default BedAndBath;
