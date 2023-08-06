import fetch from "isomorphic-unfetch";

export async function getStaticProps() {
  const userReq = await fetch(
    "https://03545230-7dee-4005-b4cb-e9bfeb718769.mock.pstmn.io/nextprac"
  );
  const userData = await userReq.json();

  const dashboardReq = await fetch(
    "https://03545230-7dee-4005-b4cb-e9bfeb718769.mock.pstmn.io/nextprac"
  );
  const dashboardData = await dashboardReq.json();

  return {
    props: {
      user: userData,
      data: dashboardData,
    },
    revalidate: 600, // 시간을 초 단위로 나타낸 값(10분)
  };
}

function IndexPage(props) {
  return (
    <div>
      Welcom, {props.user}! Your age is {props.data}
    </div>
  );
}

export default IndexPage;
