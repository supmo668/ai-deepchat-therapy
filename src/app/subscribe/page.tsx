// app/subscribe/page.tsx

import Navbar from '../../components/Navbar';
import styles from '../../styles/Subscribe.module.css';

const SubscribePage = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.heading}>Become a Member</h1>
        <p className={styles.description}>
          Subscribe for only <span className={styles.price}>$5.99</span> per month to access premium features.
        </p>
        <div className={styles.subscribeContainer}>
          <ul className={styles.features}>
            <li>Unlimited AI Therapy Sessions</li>
            <li>Access to Premium Content</li>
            <li>Personalized Progress Tracking</li>
            <li>Priority Support</li>
          </ul>
          <button className={styles.subscribeButton}>Subscribe Now</button>
        </div>
      </main>
    </>
  );
};

export default SubscribePage;
