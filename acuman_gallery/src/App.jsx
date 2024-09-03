import { useState } from 'react';
import './App.css';
// import BlogPost from './components/BlogPost';
import Category from './components/Category';
import Footer from './components/Footer';
import FullBlog from './components/FullBlog';
import Pagination from './components/Pagination';
// import BigData from './data.json';
// import CreatePost from './pages/CreatePost';

function App() {
  // const API_url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_SOME_KEY}`;
  const envkey = import.meta.env.VITE_SOME_KEY;


  const [search, setSearch] = useState();
  const [currentPageSearch, setCurrentPageSearch] = useState([]);
  const handleImgSearch = (e) => {
    setSearch(e.target.value);
  }
  // console.log(search)
  const searchData = () => {
    apiCaller(search);
  }
  const apiCaller = async (searchValue) => {
    const get = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${envkey}`)
    const data = await get.json();
    // console.log(data.results);
    setCurrentPageSearch(data.results);
  }


  console.log(currentPageSearch)
  return (
    <>
      <nav className="top">
        <header className='responsive'>
          <nav>
            <a className="small-round">Subscribe</a>
            <h5 className="max center-align"><a href="">Splash</a></h5>
            <a href="">
              {/* <span className="material-symbols-outlined">
                search
              </span> */}
            </a>
            <button className="border small-round">Signup</button>
          </nav>
        </header>
      </nav>
      {/* mainse */}

      <main className="responsive">

        <div className='responsive center-align middle-align'>
          <nav className='scroll'>
            <div className="grid">
              <div className="s3">
                <Category search={() => apiCaller('cake')} title='Cake' />
              </div>
              <div className="s3">
                <Category search={() => apiCaller('pokemon')} title='Pokemon' />
              </div>
              <div className="s3">
                <Category search={() => apiCaller('beach')} title='Beach' />
              </div>
              <div className="s3">
                <Category search={() => apiCaller('docker')} title='Docker' />
              </div>
            </div>

          </nav>
        </div>

        {/* <div className="hero">
          <div className="hero-image-text">
            <h1>This is a Title</h1>
            <h5>This is a Subtitle</h5>
            <small>
              <a className='hero-image-text' href="">Continue ...</a>
            </small>
          </div>
        </div> */}

        <article className=" responsive max center-align middle-align">
          {/* <form> */}
          <div className="grid mobile-search">
            <div className="s10">
              <div className="field label prefix round border">
                <i>search</i>
                <input type="text" onChange={handleImgSearch} />
                <label placeholder='pokemon'></label>
              </div>
            </div>
            <div className="s1">
              <button onClick={searchData}>Search</button>
            </div>
          </div>
          {/* </form> */}
        </article>


        .
        {/* <img src='' alt="" /> */}
        <div>
          <div className="grid medium-space desktop">
            {currentPageSearch.map((data) => {
              // console.log(data.urls)
              return (
                <>
                  <div className="s6">
                    <article className="no-padding fill">
                      <img className="responsive small" src={data.urls.full} />
                      <div className="padding">
                        <h5>{data.alt_description}</h5>
                        <p>{data.description}</p>
                        <nav>
                          <a target="_blank" href={data.urls.full}>
                            <button>More</button>
                          </a>
                        </nav>
                      </div>
                    </article>
                  </div>

                </>
              )
            })}
          </div>
          <div className="grid vertical medium-space mobile">
            {currentPageSearch.map((data) => {
              return (
                <>
                  {/* <div className="s12">
                    <img src={data.urls.full} alt={data.alt_description} />
                    <p>{data.alt_description}</p>
                  </div> */}
                  <article className="no-padding fill">
                    <img className="responsive small" src={data.urls.full} />
                    <div className="padding">
                      <h5>{data.alt_description}</h5>
                      <p>{data.description}</p>
                      <nav>
                        <a target="_blank" href={data.urls.full}>
                          <button>More</button>
                        </a>
                      </nav>
                    </div>
                  </article>
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
              <h2>From Team Splash</h2>
              <hr className="medium"></hr>
              <FullBlog />
              {/* <FullBlog /> */}
              <div className="large-space"></div>
              <Pagination />
            </div>
            <div className="s12 m4 13">
              <h2>About</h2>
              <h6>This is a Image Gallery website using the unsplash api by <a href="https://codechini.netlify.app/">@codechini</a>.</h6>
              <div className="small-space"></div>
              <h2>Articles</h2>
              {/* <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni suscipit iure quibusdam dolorem necessitatibus est ut.</h6> */}
              <div className="vertical left-align top-align">
                <a href="https://codechini.netlify.app/">Portfolio</a>
                <a href="https://basecss.netlify.app/" className=''>BaseCSS</a>
                <a href="https://www.beercss.com/">UI-BeerCSS</a>
                <a href="#3">Lorem ipsum dolor sit</a>
                <a href="#4">Lorem </a>
                <a href="#5">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
        </div>
        {/* <Pagination /> */}
      </main>
      {/* <CreatePost /> */}

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
