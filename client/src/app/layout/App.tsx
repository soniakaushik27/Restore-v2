

import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";


function App() {


  //const darkMode = true;
  const {darkMode}=useAppSelector(state=>state.ui);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  });




  // const addProduct = () => {
  //   setProducts(prevState => [...prevState,
  //   {
  //     id: prevState.length + 1,
  //     name: 'Product' + (prevState.length + 1),
  //     price: (prevState.length * 100) + 100,
  //     description: 'Test',
  //     quantityInStock: 100,
  //     pictureUrl: 'https://picsum.photo/200',
  //     type: 'Test',
  //     brand: 'Test'
  //   }])
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar/>
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode
            ? 'radial-gradient(circle,#1e3aBa,#111B27)'
            : 'radial-gradient(circle,#baecf9,#f0f9ff)',
          py: 6
        }}
      >
        <Container maxWidth='xl' sx={{ mt: 8 }}>
          <Outlet />
        </Container>
      </Box>


    </ThemeProvider>
  )
}

export default App
