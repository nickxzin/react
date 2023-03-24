import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton( props, to ) {
    return(
        <Link className={styles.btn} to={props.to}>
            {props.text}
        </Link>
    )
}

export default LinkButton