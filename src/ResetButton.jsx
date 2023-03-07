import { RestartAlt } from "@mui/icons-material"
import { Button, Paper, Typography } from "@mui/material"
import React from "react"

const ResetButton = ({ children, handleReset }) => {
  return (
    <Paper>
      <Button onClick={handleReset} fullWidth={true} sx={{ paddingY: "10px" }}>
        <Typography>{children}</Typography>
        <RestartAlt />
      </Button>
    </Paper>
  )
}

export default ResetButton
