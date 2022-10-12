import React, { ReactNode } from 'react';
import styles from './styles.css'

type Props = {
  element: ReactNode
}

const CustomGridItemBig = ({ element }: Props) => {
  return <div className={styles.grid__itembig}>
    {element}
  </div>
}

export default CustomGridItemBig
