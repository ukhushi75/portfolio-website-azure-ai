  import "./globals.css";
  import Head from 'next/head'
  import { GoogleAnalytics } from "@next/third-parties/google"

  export const metadata = {
    title: "Khushi's Portfolio",
    description: "Portfolio Web Design",
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <GoogleAnalytics gaId="G-TK5F3P4MFR"/>
      <Head>
       
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/jpg" href="./imgs/favicon.jpg" />
      </Head>
        <body>
         
          {children}
          </body>
      </html>
    );
  }