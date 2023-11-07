import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function SuccessAlert({title}) {
  return (
    <Stack>
      <Alert severity="success">
        {title}
      </Alert>
    </Stack>
  );
}
