// pages/index.js
import { client } from "libs/client";
import { Header } from "components/Header/header";
import Link from "next/link";

export default function Home({ blog }) {
  console.log(blog);
  return (
    <div className="h-screen w-screen">
      <Header />

      <div className="w-2/4 mx-auto my-5">
        <h2 className="text-2xl text-center">記事一覧</h2>
        <ul className="grid grid-cols-3">
          {blog.map((blog) => (
            <li key={blog.id} className="m-5">
              <Link href={`/blog/${blog.id}`}>
                <a>
                  <img
                    src={blog.image.url}
                    alt="ダミー"
                    className="w-60 h-50"
                  />
                  {blog.title}
                </a>
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
