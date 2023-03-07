import { Paper, Typography } from "@mui/material"
import React from "react"

const Display = ({ displayTime }) => {
  return (
    <Paper elevation={3} sx={{ paddingY: "10px", paddingX: "20px" }}>
      <Typography variant="h3">{displayTime}</Typography>
    </Paper>
  )
}

export default Display
