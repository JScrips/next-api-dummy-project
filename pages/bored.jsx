import React from 'react'
import Postcard from '../components/Postcard'

const bored = ({ res }) => {
  console.log(res)
  return (
    <ul className="rounded-xl flex flex-col gap-20">
      {res.items.map(p=> <Postcard post={p} key={p.guid}/>)}

    </ul>
  )
}

export default bored


export async function getStaticProps(){
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40davidrussellbeach';
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  return {
    props: {
      res: json
    }
  }
}