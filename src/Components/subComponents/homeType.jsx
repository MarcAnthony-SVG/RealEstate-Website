import React from "react";
import { Form , Button} from "react-bootstrap";
const HomeType = (props) => {
  return (
    <div>
      <div>Home Type</div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Houses"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Manufactured"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Condos/co-ops"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Multi-Family"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Apartments"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Lots/Land"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Townhomes"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </Form>
      <Button variant="outline-secondary">Done</Button>
    </div>
  );
};

export default HomeType;
