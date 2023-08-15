import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview(reviews) {
    console.log(reviews.reviews);
    const items=reviews.reviews
    const [open, setOpen] = useState(false);
  return (
    <>
    <Button variant='dark'
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      Client Reviews
    </Button>
    <Collapse in={open}>
      <div className='mt-2' id="example-collapse-text">
        {
            items?.map((review)=>(
                <div className='border p-2 mt-2 rounded'>
                    <h6> {review.name}: ({review.date})</h6>
                    <p>Rating:{review.rating}</p>
                    <p>Comments:{review.comments}</p>
            
                </div>
            ))
        }
      </div>
    </Collapse>
  </>
  )
}

export default Restreview