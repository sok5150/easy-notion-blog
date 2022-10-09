import DocumentHead from '../../components/document-head'
import {
  BlogPostLink,
  BlogTagLink,
  NextPageLink,
  NoContents,
  PostDate,
  // PostExcerpt,
  PostTags,
  PostTitle,
  // ReadMoreLink,
} from '../../components/blog-parts'
import styles from '../../styles/blog.module.css'
import {
  getPosts,
  getFirstPost,
  getRankedPosts,
  getAllTags,
} from '../../lib/notion/client'
import Image from 'next/image'

export async function getStaticProps() {
  const [posts, firstPost, rankedPosts, tags] = await Promise.all([
    getPosts(),
    getFirstPost(),
    getRankedPosts(),
    getAllTags(),
  ])

  return {
    props: {
      posts,
      firstPost,
      rankedPosts,
      tags,
    },
    revalidate: 60,
  }
}

const RenderPosts = ({
  posts = [],
  firstPost,
  rankedPosts = [],
  tags = [],
}) => {
  return (
    <div className={styles.container}>
      <DocumentHead title="BLOG" />

      <div className={styles.mainContent}>
        <NoContents contents={posts} />

        {posts.map(post => {
          return (
            <div className={styles.post} key={post.Slug}>
              <PostDate post={post} />
              <PostTags post={post} />
              <PostTitle post={post} />
              {/* <PostExcerpt post={post} />
              <ReadMoreLink post={post} /> */}
            </div>
          )
        })}

        <footer>
          <NextPageLink firstPost={firstPost} posts={posts} />
        </footer>
      </div>

      <div className={styles.subContent}>

        {/* add */}
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
          <a href="google">test</a>
        </div>





        <BlogPostLink heading="Recommended" posts={rankedPosts} />
        <BlogTagLink heading="Categories" tags={tags} />
      </div>
    </div>
  )
}

export default RenderPosts
