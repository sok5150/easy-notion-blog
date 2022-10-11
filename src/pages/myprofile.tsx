import React from 'react'
import ExtLink from '../components/ext-link'
import styles from '../styles/blog-parts.module.css'
import Image from 'next/image'
import {FaTwitterSquare} from 'react-icons/fa';

function Myprofile(){

  return (
    
    <div className={styles.myprofile}>
      <div className={styles.myimage} >
      {/* <div className="myimage" style={{display: "flex",justifyContent: "center"}}> */}
      <Image
        src="/profile.jpg"
        width={150}
        height={150}
        objectFit="contain"
        alt='myimage'
      />
      </div>
      <div className={styles.mycomment}>
        <p>コメントコメントコメントコメントコメントコメントコメント</p>
        <p>コメントコメントコメントコメントコメントコメントコメントコメントコメント</p>

      </div>
      <div className={styles.mysns}>
        <ExtLink href="https://twitter.com/sok_41">
        <FaTwitterSquare size={40} color={'#251d1c'}/>
        </ExtLink>
      </div>
    </div>

  )

}

export default Myprofile;