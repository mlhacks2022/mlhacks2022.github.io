import '../styles/globals.css';
import { useEffect } from 'react';

import Layout from '../components/layout'
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      };
    };
  }, []);
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
};

export default MyApp;