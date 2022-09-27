import Head from 'next/head';
import React from 'react';
import SearchHeader from '../components/SearchHeader';

export default function search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      {/* search header  */}
      <SearchHeader />
      {/* search results  */}
      {/* hello world */}
    </div>
  );
}
