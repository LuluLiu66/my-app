import React, { useRef }  from "react";
import { firestore } from '../firebase';
import { addDoc, collection } from "@firebase/firestore";

import { Button, Checkbox, Box, Fab, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, IconButton, Tooltip } from '@mui/material';
import Icon from '@mui/material/Icon';

export default function Home() {
    const msgRef = useRef();
    const ref = collection(firestore, "messages");

    const handleSave = async(e) => {
        e.preventDefault();
        console.log(msgRef.current.value);
        
        let data = {
            message: msgRef.current.value,
        }

        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <form onSubmit={handleSave}>
                <label>enter message</label>
                <input type="text" ref={msgRef} />
                <button type="submit">Save</button>
            </form>

            <div>Button</div>
            <Button variant="contained">Hello World</Button>

            <div>Checkbox</div>
            <div>
                <Checkbox defaultChecked />
                <Checkbox />
                <Checkbox disabled />
                <Checkbox disabled checked />
            </div>

            <div>floating action button</div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Icon>account_circle</Icon>
                <Icon color="primary">add_circle</Icon>
            </Box>

            <div>Radio</div>
            <FormControl>
               <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
               <RadioGroup
                 aria-labelledby="demo-radio-buttons-group-label"
                 defaultValue="female"
                 name="radio-buttons-group"
               >
                 <FormControlLabel value="female" control={<Radio />} label="Female" />
                 <FormControlLabel value="male" control={<Radio />} label="Male" />
                 <FormControlLabel value="other" control={<Radio />} label="Other" />
               </RadioGroup>        
             </FormControl>

             <div>tooltip</div>
             <Tooltip title="Delete">
                <IconButton>
                    <Icon>delete</Icon>
                </IconButton>
            </Tooltip>
        </div>
        
    )
}