import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { IoMdShareAlt } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import localFont from 'next/font/local'

const Arabic = localFont({
  src: [
    {
      path: '../../public/assets/fonts/neo-sans-arabic-regular.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
})



export default function Home() {
  const combinedStyles = {
    ...Arabic.style,
  };
  console.log(combinedStyles.fontFamily, "combinedStyles")
  return (
    <>
      <Head>
        <title>هذا هو الإسلام</title>
        <meta name="description" content="هذا هو الإسلام" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/imgs/logo.png" />
      </Head>

      <main className={`${styles.main} ${combinedStyles.fontFamily}`} style={combinedStyles}>
        <div className="sec_container">
          <div className="bg_container">
            <img src="/assets/imgs/bg.jpg" alt="" />
          </div>

          <div className="header">
            <div className="logo">
              <img src="/assets/imgs/logo.png" alt="" />
            </div>
            <div className="social_links">
              <a href="/" className="icon_container">
                <TfiEmail />

              </a>

              <a href="/" className="icon_container">
                <IoMdShareAlt />

              </a>


              <a href="/" className="icon_container">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="language-selection text-center">
            <ul>
              <li>
                <a href="#">عربي</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Indonesia</a>
              </li>
              <li>
                <a href="#">Italiano</a>
              </li>
              <li>
                <a href="#">Español</a>
              </li>
              <li>
                <a href="#">Français</a>
              </li>
              <li>
                <a href="#">भाारतीीय</a>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </>
  );
}
