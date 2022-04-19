import Navbar from './navbar';
import Footer from './footer';
import { Parallax } from 'react-scroll-parallax';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
};