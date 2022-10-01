import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { MicrophoneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import googleImage from '../public/images/Google_2015_logo.png';
export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value.trim();
    if (!term) return;
    router.push(`/search/?term=${term}&searchType=`);
  };

  async function randomSearch(event) {
    event.preventDefault();
    const randomTerm = await fetch(
      'https://random-word-api.herokuapp.com/word'
    ).then((response) => response.json());
    if (!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`);
  }
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header  */}

      <Header />

      {/* body  */}

      <form className="flex flex-col items-center mt-40">
        <Image width="300" objectFit="cover" height="100" src={googleImage} />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={randomSearch} className="btn">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      {/* footer  */}
      <Footer />
    </div>
  );
}
