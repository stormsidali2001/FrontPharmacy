import { ToastContainer } from 'react-toastify'
import { useRef } from 'react';
import '../styles/globals.css'
import ToastPortal from '../components/ToastPortal';
import { store } from '../store/index.ts';
import { StoreProvider } from 'easy-peasy';
import Layout from './Layout';

function MyApp({ Component, pageProps }) {
  const toastsRef = useRef();
  return(
    <StoreProvider store={store} >
      <Layout toastsRef = {toastsRef}>
          <Component {...pageProps}  toastsRef = {toastsRef}/>
          <ToastPortal
            ref = {toastsRef}
          />
       </Layout>
    </StoreProvider>
    ) 
    
}

export default MyApp
