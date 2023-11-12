import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import TopBar from "../components/TopBar";

export const reportWebVitals = (metrics) => console.log(metrics);

function App({ Component, pageProps }) {
  return (
    // attribute="class"를 지정해서
    // 메인 <html> 태그에 "dark" CSS 클래스를 적용합니다.
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-900 bg-gray-50 w-full min-h-screen">
        <TopBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
