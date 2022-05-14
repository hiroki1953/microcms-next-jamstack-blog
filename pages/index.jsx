// pages/index.js
import { client } from "libs/client";
import { Header } from "components/Header/header";
import { Nav } from "components/Nav/nav";
import { Tops } from "components/Tops/tops";
import { Profile } from "components/Profile/profile";
import { Posts } from "components/Posts/posts";

export default function Home({ blog }) {
  const fillterTopTags = blog.filter((blog) => {
    return blog.tags[0] === "top";
  });

  const fillterProfileTags = blog.filter((blog) => {
    return blog.tags[0] === "profile";
  });

  const fillterOthersTags = blog.filter((blog) => {
    return blog.tags[0] === "others";
  });

  console.log(fillterProfileTags);
  console.log(blog);

  return (
    <div className="h-screen w-screen">
      <Header />
      <Nav />
      <div className="w-[72.5rem] h-screen mx-auto my-5">
        <div className="flex h-screen">
          <div className="basis-2/3 flex flex-col">
            <Tops tops={fillterTopTags} />
            <Posts posts={fillterOthersTags} />
          </div>
          <Profile profile={fillterProfileTags} />
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
