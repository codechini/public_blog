// import { useState } from 'react'
import './App.css';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import FullBlog from './components/FullBlog';
import BigData from './data.json';

function App() {
  return (
    <>
      <nav className="top">
        <header className='responsive'>
          <nav>
            <a className="small-round">Subscribe</a>
            <h5 className="max center-align">pForbes</h5>
            <span className="material-symbols-outlined">
              search
            </span>
            <button className="border small-round">Signup</button>
          </nav>
        </header>
      </nav>
      {/* mainse */}
      <main className="responsive">
        <div className='responsive center-align middle-align'>
          <nav className='scroll'>
            <a href="">World</a>
            <a href="">U.S</a>
            <a href="">Technology</a>
            <a href="">Design</a>
            <a href="">Culture</a>
            <a href="">Business</a>
            <a href="">Politics</a>
            <a href="">Opinion</a>
            <a href="">Science</a>
            <a href="">Health</a>
            <a href="">Style</a>
            <a href="">Travel</a>
          </nav>
        </div>
        <div className="hero">
          <div className="hero-image-text">
            <h1>This is a Title</h1>
            <h5>This is a Subtitle</h5>
          </div>
        </div>
        {/* <img src='' alt="" /> */}
        <div>
          <div className="grid medium-space desktop">
            {BigData.slice(0, 2).map((data) => {
              return (
                <>
                  <div className="s6">
                    <div key={data.id}>
                      <BlogPost title={data.title.substring(0, 20)} content={data.content.substring(0, 80)} chip={data.category} color={data.color} />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <div className="grid vertical medium-space mobile">
            {BigData.slice(0, 2).map((data) => {
              return (
                <>
                  <div className="s12">
                    <div key={data.id}>
                      <BlogPost title={data.title.substring(0, 20)} content={data.content.substring(0, 50)} chip={data.category} color={data.color} />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        {/* Bottom Sections */}
        <div className="large-space"></div>
        <div>
          <div className="grid small-space">
            <div className="s12 m8 13">
              <h1><i>From the FireHose</i></h1>
              <hr className="medium"></hr>
              <FullBlog />
              <FullBlog />
            </div>
            <div className="s12 m4 13">
              <h2>About</h2>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni suscipit iure quibusdam dolorem necessitatibus est ut.</h6>
              <div className="small-space"></div>
              <h2>Articles</h2>
              {/* <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni suscipit iure quibusdam dolorem necessitatibus est ut.</h6> */}
              <div className="vertical left-align top-align">
                <a href="" className=''>Lorem ipsum dolor sit amet</a>
                <a href="">Lorem</a>
                <a href="">Lorem ipsum dolor </a>
                <a href="">Lorem ipsum dolor sit</a>
                <a href="">Lorem </a>
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default App
