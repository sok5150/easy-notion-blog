import React from 'react'
import ExtLink from '../components/ext-link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSquareTwitter} from "@fortawesome/free-brands-svg-icons"

function Myprofile(){

  return (
    <div className="profile" style={{marginBottom:"15px"}}>
    <div className="myimage" style={{display: "flex",justifyContent: "center"}}>
    <Image
      src="/profile.jpg"
      width={150}
      height={150}
      objectFit="contain"
      alt='myimage'
    />
    </div>
    <div className="mycomment">
      <p>コメントコメントコメントコメントコメントコメントコメント</p>
      <p>コメントコメントコメントコメントコメントコメントコメントコメントコメント</p>

    </div>
    <i className="fa-brands fa-square-twitter"></i>
    <div className="mysns">
      <ExtLink href="https://github.com/otoyo/easy-notion-blog">
      <FontAwesomeIcon icon={faSquareTwitter} />
      </ExtLink>
    </div>
      </div>
  )


}

export default Myprofile;