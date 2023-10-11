import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import styles from "./page.module.scss";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { PiArrowRightThin } from "react-icons/pi";

export const getStaticProps = async ({ locale, params }: any) => {
  const post = allPosts.find((post) => {
    return post.slug === params.slug;
  });

  console.log({relogamesmo: {locale, params}})

  return {
    props: {
      locale,
      messages: (await import(`@/languages/${locale}/index.json`)).default,
      params: { ...params },
      post,
    },
  };
};


export const getStaticPaths = ((props: any) => {
  const posts = allPosts.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  console.log({deslog: props})

  return {
    paths: posts,
    fallback: false,
  };
});

const Post = (props: any) => {
  console.log(props)
  return (
    <article>
      {JSON.stringify(props)}
      oi
      {/* <div>
        <img src={post.image} className={styles.image} />
        <div className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <time dateTime={post.date} className={styles.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
      <div className={styles.content}>
        <Link href={post.link_next ?? ("" as Url)} className={styles.nextLink}>
          <b>Próximo Post</b>
          <br />
          {post.title_next}
          <PiArrowRightThin className={styles.icon} />
        </Link>
      </div> */}
    </article>
  );
};

export default Post;
