import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { IoMdShareAlt } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import localFont from 'next/font/local'
import Link from "next/link";
import axios from "axios";

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
  return (
    <>
      <Head>
        <title>هذا هو الإسلام</title>
        <meta name="description" content="هذا هو الإسلام" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={`${styles.main} ${combinedStyles.fontFamily}`} style={combinedStyles}>
        <div className="sec_container">
          <div className="bg_container">
            <img src="/assets/imgs/bg.jpg" alt="" />
          </div>

          <div className="header">
            <div className="logo">
              <Image width={200} height={150} src="/assets/imgs/logo.png" alt="" />
            </div>
            <div className="social_links">
              <Link href="/" className="icon_container">
                <TfiEmail />

              </Link>

              <Link href="/" className="icon_container">
                <IoMdShareAlt />

              </Link>


              <Link href="/" className="icon_container">
                <FaWhatsapp />
              </Link>
            </div>
          </div>
          <div className="language-selection text-center">
            <ul>
              <li>
                <Link href="#">عربي</Link>
              </li>
              <li>
                <Link href="#">English</Link>
              </li>
              <li>
                <Link href="#">Indonesia</Link>
              </li>
              <li>
                <Link href="#">Italiano</Link>
              </li>
              <li>
                <Link href="#">Español</Link>
              </li>
              <li>
                <Link href="#">Français</Link>
              </li>
              <li>
                <Link href="#">भाारतीीय</Link>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </>
  );
}



