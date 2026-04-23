'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

export default function ProfessionalsGrid({ lawyers }: { lawyers: any[] }) {
  return (
    <motion.div 
      className={styles.lawyerGrid}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {lawyers.map((lawyer) => (
        <motion.div key={lawyer.id} variants={itemVariants}>
          <Link href={`/professionals/${lawyer.id}`} className={styles.lawyerCard}>
            <div className={styles.lawyerImg}>
              {lawyer.image ? (
                <Image 
                  src={lawyer.image} 
                  alt={lawyer.name} 
                  fill 
                  style={{ objectFit: 'cover', objectPosition: 'top' }} 
                  className={styles.innerImg} 
                />
              ) : (
                <div className={styles.lawyerPlaceholder}>
                  <span>{lawyer.name[0]}</span>
                </div>
              )}
            </div>
            <div className={styles.lawyerInfo}>
              <span className={styles.lawyerTitle}>{lawyer.title}</span>
              <h3>{lawyer.name}</h3>
              <div className={styles.lawyerAreas}>
                {lawyer.areas.map((a: string) => <span key={a}>{a}</span>)}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
