import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import muiLogo from "/mui.svg";
import { Button, Typography, Box, Link, Grid, Tooltip } from "@mui/joy";
import { Add } from "@mui/icons-material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      container
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#060a0e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography level="h1" color="primary">
        Vite + React + MUI/Joy
      </Typography>
      <Box
        sx={{
          width: "60vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "space-around",
          py: 10,
        }}
      >
        <Link href="https://vitejs.dev" target="_blank">
          <Tooltip title="Vite">
            <Box
              sx={{
                width: 100,
                height: 100,
              }}
              component="img"
              src={viteLogo}
              className="logo"
              alt="Vite logo"
            />
          </Tooltip>
        </Link>
        <Link href="https://react.dev" target="_blank">
          <Tooltip title="React">
            <Box
              sx={{
                width: 100,
                height: 100,
              }}
              component="img"
              src={reactLogo}
            />
          </Tooltip>
        </Link>
        <Link href="https://mui.com/joy-ui/getting-started/" target="_blank">
          <Tooltip title="MUI">
            <Box
              sx={{
                width: 100,
                height: 100,
              }}
              component="img"
              src={muiLogo}
              className="logo"
              alt="Mui logo"
            />
          </Tooltip>
        </Link>
      </Box>

      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
        size="lg"
          startDecorator={<Add />}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography sx={{
          mt: 2
        }} color="neutral" level="h3">
          Edit <code>src/App.jsx</code> and save to test HMR
        </Typography>
      </Box>
      <Typography color="primary" component="h4">
        Click on any of the logos to learn more about them
      </Typography>
    </Box>
  );
}

export default App;
