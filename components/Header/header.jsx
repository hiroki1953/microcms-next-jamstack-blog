import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center border-2 border-gray-300">
      <Link href="/">
        <h1 className="text-2xl m-8">Tech-DA</h1>
      </Link>
      <Link href="https://twitter.com/vanmason2026">
        <a target="_blank">
          <img src="images/twitter.png" className="h-10 w-12 mr-8"></img>
        </a>
      </Link>
    </header>
  );
};
