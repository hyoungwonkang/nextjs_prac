import Link from "next/link";

function Navbar() {
  return (
    <div>
      <Link href="/about">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about">Contacts</Link>
    </div>
  );
}

export default Navbar;
