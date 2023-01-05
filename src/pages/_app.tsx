import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import AppArea from '../layouts/AppArea';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Modal from '../layouts/Modal';
import Globals from '../styles/Globals';
import Theme from '../styles/Theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <AppArea>
        <main>
          <Component {...pageProps} />
        </main>
      </AppArea>
      <Footer />
      <Modal />
      <Globals />
    </ThemeProvider>
  );
};

export default App;
