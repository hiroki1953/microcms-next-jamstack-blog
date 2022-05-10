// pages/index.js
import { client } from "libs/client";
import { Header } from "components/Header/header";
import { Nav } from "components/Nav/nav";
import { Posts } from "components/Posts/posts";

export default function Home({ blog }) {
  console.log(blog);
  // const fillteTopTags = blog.filter((blog) => {
  //   return blog.pops === 1;
  // });
  // console.log(fillteTopTags);

  return (
    <div className="h-screen w-screen">
      <Header />
      <Nav />
      <Posts posts={blog} />
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
