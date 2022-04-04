import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import blurBackground from '../public/bg.jpg';

const index = () => {
    return (
        <>
        <Image src={blurBackground} alt='background break' layout="fill" priority></Image>
        <div>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.description}>
            <Link href={'/home'}><a>Home</a></Link>
            <Link href={'/aboutus'}><a>About us</a></Link>
            <Link href={'/feedback'}><a>Contact us</a></Link>
            <Link href={'/products'}><a>Products</a></Link>
            <Link href={'/error404Page'}><a></a></Link>
            </div>
        </div>
        </>
    );
};

export default index;