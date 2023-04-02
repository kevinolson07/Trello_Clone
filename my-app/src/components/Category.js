import React, { useState } from'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
// const useStyle = makeStyles()
const default_val = "Todo"

export default function Category() {
    const [open, setOpen] = useState(false);
    return(
        
        <div>
            {open?
            <Toast>
               <Form.Control type="text"/>
            </Toast>
            :(
            <strong onClick={()=>setOpen(!open)}>
                {default_val} 
            </strong>
            )
            
            }
            
            
        </div>
    )
}