import React, { use, useEffect, useState } from 'react'
import Styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component';

const  Blog = ({allBlogs, allCount}) => {
    const [blogs, setblogs] = useState(allBlogs)
    const [count, setcount] = useState(2)

    //this is for file system routing
    // useEffect(()=>{
    //     console.log("useeffect is running");
    //     fetch('http://localhost:3000/api/blogs').then((a)=>{
    //         return a.json();
    //     })
    //     .then((parsed)=>{
    //         // console.log(parsed)
    //         setblog(parsed)
    //     })
    // },[])

   const fetchMoreData = async () =>{
    // a fake async api call like which sends
    //20 more records in 1.5 secs
    // setTimeout(()=>{
    //   this.setState({
    //     items: this.state.items.concat(Array.from({length:20}))
    //   });
    // },1500);

   let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
   setcount(count+2)
   let data = await d.json()
   setblogs(data)
   }

  return (
    <main className={Styles.main}>

<InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={allCount !== blogs.length}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  >
    {blogs.map((item)=>{
      return (
    <div className={Styles.blogItemh3} key={item.slug}>
       <Link href={`/blogPost/${item.slug}`}>
         <h3>{item.title}</h3>
        </Link> 
      <p className={Styles.blogItemp}>{item.metadesc.substr(0,200)}...</p>
      </div>
    )})}
</InfiniteScroll>

    {/* <div className={Styles.blogItemh3}>
       <Link href="/blogPost/learn-javaScript"><a>
         <h3>How to learn JavaScript in 2022?</h3>
        </a> </Link> 
      <p>JavaScript is the language used to design logic for the web</p>
    </div>
    <div className={Styles.blogItemh3}>
       <Link href="/blogPost/learn-javaScript"><a>
         <h3>How to learn JavaScript in 2022?</h3>
        </a> </Link> 
      <p>JavaScript is the language used to design logic for the web</p>
    </div> */}
  </main>
  )
}

export default  Blog

//static generation
// export async function getStaticProps(context) {
// let data = await fetch("http://localhost:3000/api/blogs")
// let allBlogs = await data.json();
// // console.log(allBlogs)

//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData")
  let allCount = data.length
  let myfile;
  let allBlogs = [];
  for(let index=0; index<8;index++){
  const item = data[index];
  // console.log(item)
  myfile = await fs.promises.readFile(('blogData/' + item), 'utf-8')
  // console.log(myfile)
  allBlogs.push(JSON.parse(myfile))
}
  
    return {
      props: {allBlogs, allCount}, // will be passed to the page component as props
    }
  }


//server side rendering

// export async function getServerSideProps(context) {
// let data = await fetch("http://localhost:3000/api/blogs")
// let allBlogs = await data.json();
// // console.log(allBlogs)

//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }