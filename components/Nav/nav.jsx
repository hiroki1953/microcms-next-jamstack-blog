import Link from "next/link";

const nav = ["カテゴリー1", "カテゴリー1", "カテゴリー1"];

export const Nav = () => {
  return (
    <div>
      <ul className="h-14 flex justify-center items-center bg-gray-200">
        {nav.map((nav) => (
          <li key={nav.id} className="m-5  hover:text-red-500">
            <Link href="/">
              <a>{nav}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
