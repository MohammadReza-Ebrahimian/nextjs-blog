import Head from "next/head";
import PostContent from "../../components/posts/post-detail/postContent";
import { getPostData, getpostsFiles } from "../../lib/postUtil";

const PostDetailPage = (props) => {
  return (
    <>
    <Head>
      <title>{props.post.title}</title>
      <meta name="description" content={props.post.excerpt} />
    </Head>
      <PostContent post={props.post} />
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 1600,
  };
}

export function getStaticPaths() {
  const postFileNames = getpostsFiles();
  const slugs = postFileNames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
