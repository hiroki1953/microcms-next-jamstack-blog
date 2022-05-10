import Link from "next/link";

export const Posts = ({ posts }) => {
  console.log(posts);

  return (
    <div className="w-5/6	 mx-auto my-5">
      <div className="grid grid-cols-3 place-items-center">
        {posts.map((posts) => (
          <div key={posts.id} className="w-96 h-96 border-2 ">
            <div className="">
              <Link href={`/blog/${posts.id}`}>
                <a className="inline-block">
                  <img
                    src={posts.image.url}
                    alt="ダミー"
                    className="w-96 h-56"
                  />
                </a>
              </Link>
              <p className="text-center text-xl">{posts.title}</p>
              <p>{posts.timestamp}</p>
              <Link href="/">
                <a>{posts.tags}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
