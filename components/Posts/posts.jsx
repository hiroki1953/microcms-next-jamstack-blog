import dayjs from "dayjs";
import Link from "next/link";

export const Posts = ({ posts }) => {
  console.log(posts);

  return (
    <div className="pr-5">
      {posts.map((posts) => (
        <div
          key={posts.id}
          className="w-full h-[45rem] border-2 mt-5 flex flex-col items-center rounded-lg"
        >
          <div className="w-[37.5rem]">
            <p className="text-center text-xl m-5">{posts.title}</p>
            <Link href={`/blog/${posts.id}`}>
              <a className="inline-block">
                <img
                  src={posts.image.url}
                  alt="ダミー"
                  className="w-[37.5rem] h-96 rounded-lg"
                />
              </a>
            </Link>
            <div
              dangerouslySetInnerHTML={{
                __html: `${posts.introduce}`,
              }}
              className="m-3"
            />
            <time dateTime={posts.createdAt} className="block">
              {dayjs(posts.createdAt).format("YYYY/MM/DD")}
            </time>
            <Link href="/">
              <a className="block">{posts.tags}</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
