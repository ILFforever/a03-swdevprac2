import styles from './productcard.module.css'
import Image from 'next/image';

export default function ProductCard () {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={'/img/venue1.jpg'}
          alt='Product Picture'
          fill={true}
          objectFit='cover'/>
      </div>
      <div className={styles.cardtext}>
        <h2>Hall of Intania</h2>
        <h4>The pride and joy of Chula Engineering</h4>
      </div>
    </div>
  );
}
