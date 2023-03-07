import { Button, Paper, Typography } from "@mui/material"
import React from "react"

const TimeControlButton = ({ children, handleTimeControl }) => {
  return (
    <Paper>
      <Button onClick={handleTimeControl} variant="filled" fullWidth={true}>
        <Typography variant="h6">{children}</Typography>
      </Button>
    </Paper>
  )
}

export default TimeControlButton
