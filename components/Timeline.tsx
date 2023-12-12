// Timeline.tsx
import React from 'react';
import styles from './Timeline.module.css';

const Timeline = () => {
  return (
    <ul className={styles.timeline}>
      {/* Item 1 */}
      <li>
        <div className={styles['direction-r']}>
          <div className={styles['flag-wrapper']}>
            <span className={styles.flag}>Step 1: Wallet Connection</span>
            {/* <span className={styles['time-wrapper']}><span className={styles.time}>Step 1</span></span> */}
          </div>
          <div className={styles.desc}>Securely link your wallet to Estate Ledger platform to initiate transactions and manage assets.</div>
        </div>
      </li>

      {/* Item 2 */}
      <li>
        <div className={styles['direction-l']}>
          <div className={styles['flag-wrapper']}>
            <span className={styles.flag}>Step 2: Asset Tokenization</span>
            {/* <span className={styles['time-wrapper']}><span className={styles.time}>Step 2</span></span> */}
          </div>
          <div className={styles.desc}>Use our minting module to transform your real estate into tradeable fractional digital tokens.</div>
        </div>
      </li>

      {/* Item 3 */}
      <li>
        <div className={styles['direction-r']}>
          <div className={styles['flag-wrapper']}>
            <span className={styles.flag}>Step 3: Real Estate Compliance & Verification</span>
            {/* <span className={styles['time-wrapper']}><span className={styles.time}>Step 3</span></span> */}
          </div>
          <div className={styles.desc}>Ensure authenticity and regulatory adherence with our integrated verification system.</div>
        </div>
      </li>

      {/* Item 4 */}
      <li>
        <div className={styles['direction-l']}>
          <div className={styles['flag-wrapper']}>
            <span className={styles['flag']}>Step 4: Marketplace Trading</span>
            {/* <span className={styles['time-wrapper']}><span className={styles.time}>Step 4</span></span> */}
          </div>
          <div className={styles.desc}>Access our marketplace to buy and sell tokenized properties with ease and transparency.</div>
        </div>
      </li>
    </ul>
  );
};

export default Timeline;
