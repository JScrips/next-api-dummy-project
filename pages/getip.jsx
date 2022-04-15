import React from "react";

const getApi = ({ ip }) => {
  console.log(ip.ip);
  return (
    <div>
      <pre></pre>
    </div>
  );
};

export default getApi;

export async function getStaticProps() {
  const url = "https://api.ipify.org?format=json";
  const ip = await fetch(url).then((r) => r.json());

  return {
    props: {
      ip,
    },
  };
}
