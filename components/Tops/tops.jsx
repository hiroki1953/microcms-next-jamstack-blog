import dayjs from "dayjs";
import Link from "next/link";

export const Tops = ({ tops }) => {
  console.log(tops);

  return (
    <div className="flex">
      {tops.map((top) => (
        <div
          key={top.id}
          className="w-full h-[30rem] border-2 mr-5 rounded-lg "
        >
          <div>
            <div className="flex flex-col items-center my-2">
              <p className="text-center text-xl mb-2">{top.title}</p>
              <Link href={`/blog/${top.id}`}>
                <a className="block">
                  <img
                    src={top.image.url}
                    alt="ダミー"
                    className="w-80 h-48 rounded-lg"
                  />
                </a>
              </Link>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${top.introduce}`,
              }}
              className="m-3"
            />
            <time dateTime={top.createdAt}>
              {dayjs(top.createdAt).format("YYYY/MM/DD")}
            </time>
            <Link href="/">
              <a className="block">{top.tags}</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
