import Image from "next/image";
import homeStyles from "./page.module.css";
import Link from "next/link"; // Link 컴포넌트 추가
import { getSortedPostsData } from "../lib/post";

type PostData = {
  date: string;
  title: string;
  id: string;
};

async function getAllPostsData() {
  const allPostsData = await getSortedPostsData();
  return allPostsData;
}

export default async function Home() {
  const allPostsData = await getAllPostsData();

  return (
    <div>
      <title>John Ahn</title>
      <section className={homeStyles.headingMd}>
        <p>[John Ahn Introduction]</p>
        <p>(This is a website)</p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }: PostData) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title} {/* <a> 태그를 제거 */}
              </Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
