import css from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.image}>
        <Image
          src="/images/site/max.webp"
          alt="Monsieur Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, i'm Monsieur Reza</h1>
      <p>i'm a web developer and also i'm SEO manager</p>
    </section>
  );
};

export default Hero;
