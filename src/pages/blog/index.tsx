// app/page.tsx
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";

export const getStaticProps = async (context: any) => {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`@/languages/${context.locale}/index.json`))
        .default,
    },
  };
};


const Blog = ({ locale }: { locale: string }) => {
  const t = useTranslations('Blog')
  const postsInLanguage: Array<Post> = allPosts.filter(
    (post: Post) => post.language == locale
  );
  const posts:Array<Post> = postsInLanguage.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      <h1 className={styles.pageTitle}>{t('title')}</h1>
      <section className={styles.container}>
        <p>{t('disclaimer')}</p>
      </section>
    </div>
  );
};

export default Blog;
