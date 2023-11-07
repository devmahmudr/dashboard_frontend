import React from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

export default function NameInput({ label, name, value, onChange,type,required}) {
  return (
    <Stack
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >
      <TextField value={value} name={name} onChange={onChange} id="standard-basic" label={label} variant="standard" type={type} required={required}/>
    </Stack>
  );
}
