export const getStaticProps = async (context: any) => {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`@/languages/${context.locale}/index.json`))
        .default,
    },
  };
};

const Error = () => {
  return <section>
    404
  </section>
}

export default Error