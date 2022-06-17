import React from "react";

import { Box } from "@mui/system";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box className={"App"}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/todos"} element={<Home />} />
          <Route
            path={"*"}
            element={<ErrorPage code="404" message="Not found" backLink="/" />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
