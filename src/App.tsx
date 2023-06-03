import { Router } from "./routes/Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/defaulTheme"
import { GlobalStyle } from "./styles/Globalstyle"

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
          <GlobalStyle/>
          <Router/>
      </ThemeProvider>
    </>
  )
}

export default App
