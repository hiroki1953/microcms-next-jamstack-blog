// pages/index.js
import Link from "next/link";
import { client } from "libs/client";

export default function Home({ blog }) {
  return (
    <div className="h-screen w-screen">
      <div className="mx-0 my-auto text-center">
        <header className="h-20">
          <h1>Tech-DA</h1>
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
