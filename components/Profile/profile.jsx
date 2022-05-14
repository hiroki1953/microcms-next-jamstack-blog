import dayjs from "dayjs";
import Link from "next/link";

export const Profile = ({ profile }) => {
  console.log(profile);

  return (
    <div className="w-full h-[30rem] basis-1/3">
      <div key={profile[0].id} className="border-2 h-full rounded-lg">
        <div className="flex flex-col	 items-center">
          <Link href={`/blog/${profile[0].id}`}>
            <a className="inline-block m-3">
              <img
                src={profile[0].image.url}
                alt="ダミー"
                className="w-32 h-32 rounded-full"
              />
            </a>
          </Link>
          <h2 className="text-center text-xl">{profile[0].name}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: `${profile[0].introduce}`,
            }}
            className="m-3"
          />
        </div>
      </div>
    </div>
  );
};
