import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 pb-28 pt-2">
      <h1 className="font-mono text-2xl font-light uppercase">
        <Link href="/" className="no-underline">
          lex tirajoh
        </Link>
      </h1>
    </header>
  );
};

export default Header;
