import Head from "next/head";
import FeaturedPosts from "../components/home-page/featuredPost";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/postUtil";

const Dummy_Posts = [
    {slug: 'getting-started', 
    title: 'getting started', 
    image: 'getting-started-nextjs.png', 
    excerpt:'NextJs is a react framework for production - it makes building fullstack React app', 
    date: '2022-02-10'},
    {slug: 'getting-started-2', 
    title: 'getting started', 
    image: 'getting-started-nextjs.png', 
    excerpt:'NextJs is a react framework for production - it makes building fullstack React app', 
    date: '2022-02-10'},
    {slug: 'getting-started-3', 
    title: 'getting started', 
    image: 'getting-started-nextjs.png', 
    excerpt:'NextJs is a react framework for production - it makes building fullstack React app', 
    date: '2022-02-10'},
    {slug: 'getting-started-4', 
    title: 'getting started', 
    image: 'getting-started-nextjs.png', 
    excerpt:'NextJs is a react framework for production - it makes building fullstack React app', 
    date: '2022-02-10'},
]

const HomePage = (props) => {

  console.log(props.posts)
  return (
    <>
    <Head>
      <title>Blog created by Nexjs 13</title>
      <meta name="description" content="All about React & NextJs"/>
    </Head>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </>
  );
};


export function getStaticProps () {
  const featuredPosts = getFeaturedPosts ();

  return {
    props: {
      posts: featuredPosts
    }
    }
}

export default HomePage;
