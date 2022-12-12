import Link from "next/link";
import styles from "../styles/BlogCard.module.css";
import Image from "next/image";

export default function BlogPost(picture, caption, instagramUser, slug) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        {picture.url}
        <Image
          src={picture.url}
          width={picture.width}
          height={picture.height}
        />
        hi hello
        {caption.text}
      </div>
    </div>
  );
}
