import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-20 flex justify-center items-center border-b-2 border-gray-300">
      <Link href="/">
        <h1 className="text-3xl m-8">Tech-DA</h1>
      </Link>
    </header>
  );
};
