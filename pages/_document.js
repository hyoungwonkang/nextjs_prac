import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  //서버에서 데이터를 불러오는 함수
  //하지만 사이트 최적화 기능르 사용할 수 없으며 무조건 서버에서 모든 페이지를 렌더링하게 됨
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
