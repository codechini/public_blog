// import { useState } from 'react'
import './App.css'
import BlogPost from './components/BlogPost'

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
      <main className="responsive">
        <div className="hero">
          <div className="hero-image-text">
            <h1>This is a Title</h1>
          </div>
          {/* <img src='' alt="" /> */}
        </div>
        <div className="vertical small-space mobile">
          <div className="s6">
            <BlogPost />
            <div className="space"></div>
          </div>
          <div className="s6">
            <BlogPost />
          </div>
        </div>
        <div className="grid desktop">
          <div className="s6">
            <BlogPost />
          </div>
          <div className="s6">
            <BlogPost />
          </div>
        </div>
      </main>

    </>
  )
}

export default App
