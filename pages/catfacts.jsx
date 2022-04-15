import React from "react";

const Catfacts = ({ actualFacts }) => {
  console.log(actualFacts);
  return (
    <div className='flex justify-center mx-auto mt-20'>
      <pre className='hidden'>{JSON.stringify(actualFacts, null, 2)}</pre>

<div className='flex gap-4 flex-col'>
      {actualFacts.map((fact) => {
        return ( 
          <article key={fact._id} className="p-4 border-2 border-black rounded-xl w-5/12">
         <h1 className="text-green-900 font-bold">Fact: {fact.text}</h1>
         <h2 className="text-semibold font-mono text-blue-900">Submitted By user: {fact.user}</h2>
         </article>
          )
       

      })}
</div>
          
          
    </div>
  );
};

export default Catfacts;

export async function getStaticProps() {
  const url = "https://cat-fact.herokuapp.com/facts";
  const actualFacts = await fetch(url).then((r) => r.json());
  console.log(actualFacts);

  return {
    props: {
      actualFacts,
    },
  };
}
