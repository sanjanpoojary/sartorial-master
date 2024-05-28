import { useEffect, useState } from 'react';
import Header from './Header';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStoreContext } from '../context/StoreContext';
import { getCookie } from '../utils/utils';
import agent from '../api/productAgent';
import LoadingComponent from './LoadingComponent';
import Myfooter from './Footer';

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const paletteType = darkMode ? 'dark' : 'light';
  const paletteType = 'light';
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket]);

  const theme = createTheme({
    palette: {
      // mode: paletteType,
      background: {
        default: paletteType == 'light' ? '#eaeaea' : '#212121',
      },
    },
  });

  // function handleChangeMode() {
  //   setDarkMode(false);
  // }

  if (loading) return <LoadingComponent message="Initialising app..." />;

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      {/* <Header darkMode={darkMode} handleChangeMode={handleChangeMode} /> */}
      <Header />
      <Outlet />
      <Myfooter />
    </ThemeProvider>
  );
}

export default App;
