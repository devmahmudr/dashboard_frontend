import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ErrorBtn({title}) {
  return (
    <Stack direction="row" spacing={2} sx={{marginTop:"20px"}}>
      <Button type='submit' variant="contained" color="error">
        {title}
      </Button>
    </Stack>
  );
}