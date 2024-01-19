import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./Pages/Global/TopBar";
import SideBar from "./Pages/Global/SideBar"
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Companies from "./Pages/Companies";
import Faq from "./Pages/Faq";
import CompnayDetails from "./Pages/CompnayDashboard";

function App() {

  const [theme, colorMode] = useMode(); 

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <SideBar />
            <main className="content">
              <TopBar/>
              <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path = "/Companies" element={<Companies/>} />
                <Route path = "/faq" element={<Faq/>} />
                <Route path={`/Companies/:name`} element={<CompnayDetails />} />
              </Routes>
            </main>
          </div> 
      </ThemeProvider>
    </ColorModeContext.Provider>     
  );
}

export default App;
