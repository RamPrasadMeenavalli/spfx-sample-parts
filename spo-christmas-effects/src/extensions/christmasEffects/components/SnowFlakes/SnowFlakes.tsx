import * as React from "react";
import styles from './SnowFlakes.module.scss';

export class SnowFlakes extends React.Component<{}> {
    public render():JSX.Element{
        return(<div className={styles.snowflakes} aria-hidden="true">
        <div className={styles.snowflake}>
        ❅
        </div>
        <div className={styles.snowflake}>
        ❆
        </div>
        <div className={styles.snowflake}>
        ❅
        </div>
        <div className={styles.snowflake}>
        ❆
        </div>
        <div className={styles.snowflake}>
        ❅
        </div>
        <div className={styles.snowflake}>
        ❆
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
      </div>);
    }
}