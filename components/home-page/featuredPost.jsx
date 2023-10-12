import PostGrid from "../posts/postGrid";
import css from "./featuredPost.module.css";

const FeaturedPosts = (props) => {
  return (
    <section className={css.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts}/>
    </section>
  );
};

export default FeaturedPosts;
