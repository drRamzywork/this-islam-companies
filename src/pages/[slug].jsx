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



export default function Home({ companyData }) {
  const combinedStyles = {
    ...Arabic.style,
  };

  const whatsappNumber = companyData.properties.Whatsapp;
  const email = companyData.properties.Email;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'هذا هو الإسلام',
        url: window.location.href,
      })
        .then(() => console.log('Thanks for sharing!'))
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("URL copied to clipboard!");
    }
  };

  return (
    <>
      <Head>
        <title>هذا هو الإسلام</title>
        <meta name="description" content="هذا هو الإسلام" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/logo.ico"} />
      </Head>

      <main className={`${styles.main} ${combinedStyles.fontFamily}`} style={combinedStyles}>

        <div className="sec_container">
          <div className="bg_container">
            {/* <img src="/assets/imgs/bg.jpg" alt="" /> */}
          </div>

          <div className="header">
            <a href={companyData.properties.website} target="_blank" className="logo">
              <img src={companyData.logo} alt="" />
            </a>

            <a href={companyData.properties.website} target="_blank" className="desc">
              <p>{companyData.properties.desc}</p>
            </a>

            <div className="social_links">
              <Link href={`mailto:${email}`} target="_blank" className="icon_container">
                <TfiEmail />

              </Link>

              <div onClick={handleShare} className="icon_container">
                <IoMdShareAlt />
              </div>

              <Link href={`https://wa.me/${whatsappNumber}`} target='_blank' className="icon_container">
                <FaWhatsapp />
              </Link>
            </div>

          </div>

          <div className="language-selection text-center">
            <ul>

              {companyData.languages.map((lang, idx) =>
                <li key={idx}>
                  <Link href={lang.link} target="_blank">{lang.name}</Link>
                </li>
              )}

            </ul>
          </div>
        </div>

      </main>
    </>
  );
}



export async function getServerSideProps({ params }) {
  const { slug } = params;
  try {
    const response = await axios.get(`https://compaines.thisislam.net/api/company/${slug}`);
    const companyData = response.data.data;






    return {
      props: {
        companyData,
      }
    };
  } catch (error) {
    return {
      notFound: false,
    };
  }
}
