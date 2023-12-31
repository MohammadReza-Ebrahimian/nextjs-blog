import Link from "next/link";
import Image from "next/image";
import css from "./postItem.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formatedDate = new Date(date).toLocaleDateString('en-US',{
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={css.post}>
      <Link href={linkPath}>
        <div className={css.image}>
          <Image src={imagePath} alt={title} 
          width={300} height={200} 
          layout="responsive"/>
        </div>

        <div className={css.content}>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
