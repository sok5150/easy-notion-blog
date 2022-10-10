import ExtLink from '../components/ext-link'
import Image from 'next/image'

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
    <div className="mysns">twitter</div>
    <ExtLink href="https://github.com/otoyo/easy-notion-blog">
          Twitter
    </ExtLink>
  </div>
  )


}

export default Myprofile;