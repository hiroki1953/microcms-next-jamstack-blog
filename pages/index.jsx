// pages/index.js
import Link from "next/link";
import { client } from "libs/client";
import { Header } from "../components/Header/header";

export default function Home({ blog }) {
  console.log(blog);
  return (
    <div className="h-screen w-screen">
      <Header />
      <ul className="flex justify-center">
        {blog.map((blog) => (
          <li key={blog.id} className="m-5">
            <Link href={`/blog/${blog.id}`}>
              <a>
                <img src={blog.image.url} alt="ダミー" className="w-60 h-50" />
                {blog.title}
              </a>
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
