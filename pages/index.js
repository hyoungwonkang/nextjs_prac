// function IndexPage() {
//   return <div>This is the index page.</div>;
// }

// export default IndexPage;
export async function getServerSideProps() {
  const userRequest = await fetch(
    "https://03545230-7dee-4005-b4cb-e9bfeb718769.mock.pstmn.io/nextprac"
  );
  const userData = await userRequest.json();

  return {
    props: {
      user: userData,
    },
  };
}

function IndexPage(props) {
  return <div>Welcome, {props.user.name}!</div>;
}

export default IndexPage;
