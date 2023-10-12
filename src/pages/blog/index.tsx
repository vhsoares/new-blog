// app/page.tsx
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import styles from "./page.module.scss";

export const getStaticProps = async (context: any) => {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`@/languages/${context.locale}/index.json`))
        .default,
    },
  };
};

function PostCard(post: Post) {
  return (
    <article className={styles.postCard}>
      <img src={post.image} />

      <div className={styles.content}>
        <h2 className="">
          <Link href={post.url} className={styles.link}>
            {post.title}
          </Link>
        </h2>
        <p className={styles.description}>{post.description}</p>
        <div>
          {post.tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
          <time dateTime={post.date} className={styles.time}>
            {format(parseISO(post.date), "d/MM/yyyy")}
          </time>
        </div>
      </div>
    </article>
  );
}

const Blog = ({ locale }: { locale: string }) => {
  const postsInLanguage: Array<Post> = allPosts.filter(
    (post: Post) => post.language == locale
  );
  const posts:Array<Post> = postsInLanguage.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      <h1 className={styles.pageTitle}>Artigos sobre Tecnologia</h1>
      <section className={styles.container}>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </section>
    </div>
  );
};

export default Blog;
