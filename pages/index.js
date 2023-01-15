import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link href="/about">ABOUT</Link>
    </div>
  );
};

export default HomePage;
