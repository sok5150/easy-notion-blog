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
        <p>普段はコーヒー片手に国内企業で働く知財屋さん。発明発掘・権利化・管理を経て今は分析・戦略立案がメイン。</p>
        <p>仕事でもがき疲れた心を家族と音楽とサッカーで癒してもらう日々を過ごしながらポジティブに生活中。</p>
        <p>今年こそはと立てた目標数知れずの中、そろそろ何か一つ。</p>
        <p>#リモート疲れ #ダイエット #読書</p>

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