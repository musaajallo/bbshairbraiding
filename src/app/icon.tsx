import { ImageResponse } from 'next/og'
import styles from './icon.module.css'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div className={styles.iconDiv}>
        B
      </div>
    ),
    {
      ...size,
    }
  )
}
