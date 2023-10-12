import css from "./allPosts.module.css";
import PostGrid from "./postGrid";

const AllPosts = (props) => {
  return (
    <section className={css.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts}/>
    </section>
  );
};

export default AllPosts;
