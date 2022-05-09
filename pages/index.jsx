// pages/index.js
import { client } from "libs/client";
import { Header } from "components/Header/header";
import Link from "next/link";
import { Nav } from "components/Nav/nav";

export default function Home({ blog }) {
  console.log(blog);
  // const fillteTopTags = blog.filter((blog) => {
  //   return blog.tags == "カテゴリー3";
  // });
  // console.log(fillteTopTags);

  return (
    <div className="h-screen w-screen">
      <Header />
      <Nav />
      <div className="w-5/6	 mx-auto my-5">
        <div className="grid grid-cols-3 place-items-center">
          {blog.map((blog) => (
            <div key={blog.id} className="w-96 h-96 border-2 ">
              <div className="">
                <Link href={`/blog/${blog.id}`}>
                  <a className="inline-block">
                    <img
                      src={blog.image.url}
                      alt="ダミー"
                      className="w-96 h-56"
                    />
                  </a>
                </Link>
                <p className="text-center text-xl">{blog.title}</p>
                <p>{blog.timestamp}</p>
                <Link href="/">
                  <a>{blog.tags}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
