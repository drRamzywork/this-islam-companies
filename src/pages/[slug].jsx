import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { IoMdShareAlt } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import localFont from 'next/font/local'
import Link from "next/link";
import axios from "axios";
import SimpleBar from "simplebar-react";
import { FaPhoneVolume } from "react-icons/fa6";
import { useRouter } from "next/router";

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
  const { query } = useRouter();
  const slug = query.slug;
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
            <img src="/hero_bg.png" alt="" />
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
              {slug === 'blue-mosque-information-center' ?
                <Link href={`tel:${whatsappNumber}`} className="icon_container">
                  <FaPhoneVolume />
                </Link>
                :
                <Link href={`https://wa.me/${whatsappNumber}`} target='_blank' className="icon_container">
                  <FaWhatsapp />
                </Link>

              }

            </div>

          </div>

          <div className="language-selection text-center">



            <SimpleBar
              style={{
                height: "58vh",
                overflowX: "hidden",
                width: 'fit-content',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ul>


                {companyData.languages.map((lang, idx) =>
                  <li key={idx}>
                    <Link href={lang.link} target="_blank">{lang.name} <br /> {lang.native}</Link>
                  </li>
                )}

              </ul>


            </SimpleBar>

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
