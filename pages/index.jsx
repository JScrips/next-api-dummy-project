import Head from "next/head";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='border-4 border-black p-10 rounded-2xl flex flex-col'>
      <Link href="./catfacts"> Here's a link to cat facts </Link> 
      <Link href="/randommeal">Here's a link for a random meal.</Link>
      <Link href="/bored"> Here's a link for if you're bored </Link>
      <Link href="/getip"> Here's a link to check your IP address </Link>
     
        


      </main>

    </div>
  );
}

