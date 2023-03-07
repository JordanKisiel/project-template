import { Container, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Display from "./components/Display"
import TimeControlButton from "./components/TimeControlButton"
import ResetButton from "./ResetButton"

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [displayTime, setDisplayTime] = useState(0) //measured in milliseconds

  function handleTimeControl() {
    setIsStarted(true)
    setIsRunning((prevValue) => !prevValue)
  }

  function handleReset() {
    setIsStarted(false)
    setDisplayTime(0)
  }

  useEffect(() => {
    let interval = null

    if (isStarted && isRunning) {
      interval = setInterval(() => {
        setDisplayTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isStarted, isRunning])

  return (
    <Container maxWidth="sm" sx={{ marginTop: "20%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Display displayTime={displayTime} />
        </Grid>
        <Grid item xs={8}>
          <TimeControlButton handleTimeControl={handleTimeControl}>
            {isRunning ? "Stop" : "Start"}
          </TimeControlButton>
        </Grid>
        <Grid item xs={4}>
          <ResetButton handleReset={handleReset}>Restart</ResetButton>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
