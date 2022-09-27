import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import SearchHeaderOptions from './SearchHeaderOptions';
import User from './User';
import googleImage from '../public/images/Google_2015_logo.png';
export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value.trim();
    if (!term) return;
    router.push(`/search?term=${term}&searchType=`);
  }
  return (
    <header className=" sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          onClick={() => router.push('/')}
          width="120"
          objectFit="contain"
          height="40"
          className="cursor-pointer"
          src={googleImage}
        />
        <form className="flex border border-gray-200 px-6 py-3 rounded-full shadow-lg ml-6 mr-5 flex-grow max-w-3xl items-center">
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XMarkIcon
            onClick={() => (searchInputRef.current.value = '')}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <MagnifyingGlassIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button onClick={search} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
