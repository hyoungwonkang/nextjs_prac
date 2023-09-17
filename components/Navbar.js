import { useContext } from "react";
import Link from "next/link";
import ThemeContext from "./themeContext";
function Navbar2() {
  //_app.js 연습을 위한 2 생성.
  const { toggleTheme, theme } = useContext(ThemeContext);
  const newThemeName = theme === "dark" ? "light" : "dark";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
      }}
    >
      <div>My Website</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contacts">Contacts</Link>
        <button onClick={toggleTheme}>Set {newThemeName} theme</button>
      </div>
    </div>
  );
}

// function Navbar() {
//   return (
//     <div>
//       <Link href="/about">Home</Link>
//       <Link href="/about">About</Link>
//       <Link href="/about">Contacts</Link>
//     </div>
//   );
// }

export default Navbar2;
