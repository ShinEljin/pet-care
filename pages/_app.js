import "../styles/style.css";
import "../styles/form.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <Image
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
          width={100}
          height={100}
        />

        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="new">Add Pet</Link>
        </div>
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
