import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';





const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <div>
      {!show && <Button onClick={() => toggleShow(true)}>Add Card</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">New Card</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </div>
  );
};


export default function InputCard() {
    return(

         <Container className="p-3">
    <div>
      <ExampleToast>
            <textarea name="Text1" cols="40" rows="5" placeholder="Enter Card Description"></textarea>
            <Button>Finished</Button>
      </ExampleToast>
    </div>
  </Container>
        // <div>
        //     <div>
        //         <textarea name="Text1" cols="40" rows="5" placeholder="Enter Card Description"></textarea>
        //     </div>
        //     <div>
        //         <Button>Add Card</Button>
        //         <input type="reset"></input>
        //     </div>
        // </div>
    )
}