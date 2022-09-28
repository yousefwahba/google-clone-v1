import Head from 'next/head';
import React from 'react';
import SearchHeader from '../components/SearchHeader';
import Response from '../Response';

export default function search({ results }) {
  console.log('hlloe ooe llllllllllllllllll');
  console.log(results);
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

export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KAY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
