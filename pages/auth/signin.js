import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';
import GoogleButton from 'react-google-button';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <GoogleButton
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
