import Head from "next/head";
import AllPosts from "../../components/posts/allPosts";
import { getAllPosts } from "../../lib/postUtil";

const Dummy_Posts = [
  {
    slug: "getting-started",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a react framework for production - it makes building fullstack React app",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-2",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a react framework for production - it makes building fullstack React app",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-3",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a react framework for production - it makes building fullstack React app",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-4",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a react framework for production - it makes building fullstack React app",
    date: "2022-02-10",
  },
];

const AllPostPage = (props) => {
  return (
    <>
      <Head>
        <title>All my Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials ans posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;
