import { Router } from "./routes/Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/defaulTheme"

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
          <Router/>
      </ThemeProvider>
    </>
  )
}

export default App
