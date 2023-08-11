import React,{useEffect,useState} from "react";
import "./blogDown.css";

import { BsArrowRightShort } from "react-icons/bs";

import img from "../../Assets/img4.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from "axios"


const Posts = [
  {
    id: 1,
    postImage: img,
    title: "Beautiful Morroco , let us travel !",
    desc: "Beautiful Morroco , let us travel Beautiful Morroco , let us travel Beautiful Morroco  let us travel Beautiful Morroco , let us travel",
  },
  {
    id: 1,
    postImage: img,
    title: "Beautiful Morroco , let us travel !",
    desc: "Beautiful Morroco , let us travel Beautiful Morroco , let us travel Beautiful Morroco  let us travel Beautiful Morroco , let us travel",
  },
  {
    id: 1,
    postImage: img,
    title: "Beautiful Morroco , let us travel !",
    desc: "Beautiful  , let us travel Beautiful Morroco , let us travel Beautiful Morroco  let us travel Beautiful Morroco , let us travel",
  },
  {
    id: 1,
    postImage: img,
    title: "Beautiful Morroco , let us travel !",
    desc: "Beautiful Morroco , let us travel Beautiful Morroco , let us travel Beautiful Morroco  let us travel Beautiful Morroco , let us travel",
  },
];

const Blog = () => {

const [blogsList, setBlogsList] = useState([]);
console.log(blogsList)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/bloghome/bloghomes");
        setBlogsList(data?.bloghomes)
      } catch (e) {
        console.log(e);
      }
    };

    fetchBlogs();

    //setList2(data.blogs);
  }, []);

  useEffect (()=>{
    Aos.init({duration:2000})
 },[])
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div data-aos="fade-right"  className="secIntro">
          <h2 id="tcust" className="secTitle">Our Best Blog .!</h2>

          <p>An insight to the incredible experience in the world.</p>
        </div>
        <div   className="mainContainer grid">
        {blogsList.map((bloghomesItem, Key) => (
          
              <div data-aos="fade-up" className="singlePost grid">
                <div className="imgDiv">
                  {/* <img src={postImage} alt={title} /> */}
                  <img src={bloghomesItem.images[0]?.url}/>
                </div>
                <div className="postDetails">
                  <h3>{bloghomesItem.title}</h3>
                  <p>{bloghomesItem.description} </p>
                  <a href="#" className="flex">
                  
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
                </div>
                
              </div>
              
            
        ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
