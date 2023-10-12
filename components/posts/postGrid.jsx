import css from "./postGrid.module.css";
import PostItem from "./postItem";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={css.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}/>
      ))}
    </ul>
  );
};

export default PostGrid;
