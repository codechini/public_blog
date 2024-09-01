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
            <button className="small-round">Button</button>
            <h5 className="max center-align">pForbes</h5>
            <button className="border small-round">Button</button>
          </nav>
        </header>
      </nav>
      {/* mainse */}
      <main className="responsive">
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
