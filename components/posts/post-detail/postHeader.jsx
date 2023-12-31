import css from './postHeader.module.css'
import Image from 'next/image';

const PostHeader = (props) => {

    const {title, image} = props;



    return ( 
        <header className={css.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} 
            width={200} height={150}/>
        </header>
     );
}
 
export default PostHeader;