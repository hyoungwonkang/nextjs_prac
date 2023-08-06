import { useEffect } from "react";
import Head from "next/head";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

function Highlight({ code }) {
  // 클라이언트에서 실행되는 리액트 앱에서는 이 코드가 문제 없이 작동하지만
  // Next.js의 빌드 과정에서는 문제가 생기기에 useEffect를 써야함.
  // Highlight.js 라이브러리가 document라는 전역변수를 사용하는데
  // 이 변수는 Node.js에서 제공하지 않으며 오직 브라우저에서만 접근할 수 있음.
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.initHighlighting();
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/highlight.css" />
      </Head>
      <pre>
        <code className="js">{code}</code>
      </pre>
    </>
  );
}

export default Highlight;
