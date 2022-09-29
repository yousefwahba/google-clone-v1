import Head from 'next/head';
import React from 'react';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Response from '../Response';
import { useRouter } from 'next/router';

export default function Search({ results }) {
  const router = useRouter();
  // console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      {/* search header  */}
      <SearchHeader />
      {/* search results  */}
      <SearchResults results={results} />
      {/* hello world */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || '1';
  const mockData = false;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KAY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
