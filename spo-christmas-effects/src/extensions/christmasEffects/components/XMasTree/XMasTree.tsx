import * as React from "react";
import styles from './XMasTree.module.scss';
const img:any = require("../../images/santa.png");

export interface IXMasTreeProps{
    onClick:() => void;
}

export class XMasTree extends React.Component<IXMasTreeProps> {
    public render():JSX.Element {
        return(
            <div className={styles.tree}>
                <div className={styles.button} onClick={this.props.onClick}>&times;</div>
                <div className={styles.christmas1}></div>
                <div className={styles.christmas2}></div>
                <div className={styles.christmas3}></div>

                <div className={`${styles.ribbonWrapper} ${styles.big}`}>
	    	        <span>
	    		        <span style={{width:"100%"}}>Merry Christmas</span>
	    	        </span>
	            </div>

                <img className={styles.santa} src={img}></img>
            </div>
        );
    }

}