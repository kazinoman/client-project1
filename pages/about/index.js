import React from "react";

const About = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <div>about us.</div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default About;
