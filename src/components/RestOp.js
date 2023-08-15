import React from 'react'
import { Button,Modal,ListGroup } from 'react-bootstrap'
import { useState } from 'react'


function RestOp(op) {
    const [show, setShow] = useState(false);
    const space='  '

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

  return (
  <>
        <Button variant="dark" onClick={handleShow}>
        Click Here to see operating hours
      </Button>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{op?.op?.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          :{op?.op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday :{op?.op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday  &nbsp;&nbsp;&nbsp;&nbsp;:{op?.op?.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{op?.op?.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday &nbsp;&nbsp;&nbsp;&nbsp; :{op?.op?.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{op?.op?.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
       
      </Modal>
  </>
  )
}

export default RestOp