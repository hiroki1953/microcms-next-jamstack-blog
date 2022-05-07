// pages/index.js
import Link from "next/link";
import { client } from "libs/client";

export default function Home({ blog }) {
  return (
    <div className="h-screen w-screen">
      <header className="h-20 flex justify-between items-center">
        <h1 className="text-2xl m-8">Tech-DA</h1>
        <img src="images/twitter.png" className="m-8 h-10 w-12"></img>
      </header>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
