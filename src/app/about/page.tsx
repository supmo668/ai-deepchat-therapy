// app/about/page.tsx

import Navbar from '../../components/Navbar';
import styles from '../../styles/About.module.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.heading}>About AI Therapy Chat</h1>
        <p className={styles.description}>
          AI Therapy Chat is designed to provide accessible mental health support
          through advanced AI technology. Our mission is to bridge the gap between
          professional therapy and those seeking immediate assistance.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Motivation</h2>
          <p className={styles.sectionParagraph}>
            We understand that not everyone has access to traditional therapy due to
            various barriers such as cost, availability, or stigma. Our platform
            aims to offer a supportive environment where users can share their
            thoughts and feelings without judgment.
          </p>
          <img
            className={styles.image}
            src="/images/motivation.jpg"
            alt="Our Motivation"
          />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Solution</h2>
          <p className={styles.sectionParagraph}>
            By leveraging cutting-edge AI, we provide real-time conversations that
            adapt to your needs. Our AI is trained to listen empathetically and
            offer constructive feedback, helping you navigate through your emotions.
          </p>
          <img
            className={styles.image}
            src="/images/solution.jpg"
            alt="Our Solution"
          />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
