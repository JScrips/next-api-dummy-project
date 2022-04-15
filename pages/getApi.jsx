import React from 'react'

const getip = ({  ip  }) => {
  console.log(ip.ip)
  return (
    <div>
      <h1> This is your IP Address: <pre>{ip.ip}</pre> </h1>
    </div>
  )
}

export default getip

export async function getStaticProps(){
  const url='https://api.ipify.org?format=json';
  const ip = await fetch(url).then(r=>r.json());

  return {
    props: {
      ip
    }
  }
}