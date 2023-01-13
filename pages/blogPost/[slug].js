import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

const Slug = ({myBlog}) => {
    const router = useRouter()
    const [blog, setblog] = useState(myBlog)
    
    // console.log(blog)

    //this is for file system routing
    // useEffect(()=>{
    //     if(!router.isReady)return;
    //     const { slug } = router.query
    //     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a)=>{
    //         return a.json();
    //     })
    //     .then((parsed)=>{
    //         // console.log(parsed)
    //         setblog(parsed)
    //     })

    // },[router.isReady])
   
    const  createMarkup= (c) => {
      return {__html: c}
    }

  return (
    <div className={Styles.container}>
        <div className={Styles.main}>
       <h1>{blog && blog.title}</h1>
       <hr/>
       {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
       {/* <div>{blog && blog.content}</div> */}
       </div>
    </div>
  )
}

export default Slug

// static generation

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug:"how-to-learn-flask" } },
      { params: { slug:"how-to-learn-nextjs" } },
      { params: { slug:"how-to-learn-JavaScript"} }
    ],
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context){
  //console.log(context.query)
  //const router useRouter();
  const { slug } = context.params;
  // console.log(slug)

  let myBlog = await fs.promises.readFile(`blogData/${slug}.json`,"utf-8")
    
  // console.log(myBlog)

  return {
    props: {myBlog: JSON.parse(myBlog)}
  }
}

// export async function getStaticProps(context){
//   //console.log(context.query)
//   //const router useRouter();
//   const { slug } = context.params;

//   let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
//   let myBlog = await data.json()
//   // console.log(myBlog)

//   return {
//     props: {myBlog}
//   }
// }


//server side rendering

// export async function getServerSideProps(context){
//   //console.log(context.query)
//   //const router useRouter();
//   const { slug } = context.query;

//   let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
//   let myBlog = await data.json()
//   // console.log(myBlog)

//   return {
//     props: {myBlog}
//   }
// }
