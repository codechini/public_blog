import './App.css';
import BlogPost from './components/BlogPost';
import Category from './components/Category';
import Footer from './components/Footer';
import FullBlog from './components/FullBlog';
import Pagination from './components/Pagination';
import BigData from './data.json';
import CreatePost from './pages/CreatePost';

function App() {

  //This below fetches api but not here.

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error:', error))
  // }, []);
  // console.log(data);

  return (
    <>
      <nav className="top">
        <header className='responsive'>
          <nav>
            <a className="small-round">Subscribe</a>
            <h5 className="max center-align">pForbes</h5>
            <a href="">
              <span className="material-symbols-outlined">
                search
              </span>
            </a>
            <button className="border small-round">Signup</button>
          </nav>
        </header>
      </nav>
      {/* mainse */}

      <main className="responsive">
        <Category />

        <div className="hero">
          <div className="hero-image-text">
            <h1>This is a Title</h1>
            <h5>This is a Subtitle</h5>
            <small>
              <a className='hero-image-text' href="">Continue ...</a>
            </small>
          </div>
        </div>
        {/* <img src='' alt="" /> */}
        <div>
          <div className="grid medium-space desktop">
            {BigData.slice(0, 2).map((posts) => {
              return (
                <>
                  <div className="s6">
                    <div key={posts.id}>
                      <BlogPost title={posts.title.substring(0, 20)} content={posts.content.substring(0, 80)} chip={posts.category} color={posts.color} />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <div className="grid vertical medium-space mobile">
            {BigData.slice(0, 2).map((posts) => {
              return (
                <>
                  <div className="s12">
                    <div key={posts.id}>
                      <BlogPost title={posts.title.substring(0, 20)} content={posts.content.substring(0, 50)} chip={posts.category} color={posts.color} />
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
              <h2>From the FireHose</h2>
              <hr className="medium"></hr>
              <FullBlog />
              <FullBlog />
              <div className="large-space"></div>
              <Pagination />
            </div>
            <div className="s12 m4 13">
              <h2>About</h2>
              <h6>Lorem ipsum dolor sit amet sectetu adipisicing elit. Qui magni suscipit iure quibusdam dolorem itatibus est ut.</h6>
              <div className="small-space"></div>
              <h2>Articles</h2>
              {/* <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni suscipit iure quibusdam dolorem necessitatibus est ut.</h6> */}
              <div className="vertical left-align top-align">
                <a href="/" className=''>Lorem ipsum dolor sit amet</a>
                <a href="#1">Lorem</a>
                <a href="#2">Lorem ipsum dolor </a>
                <a href="#3">Lorem ipsum dolor sit</a>
                <a href="#4">Lorem </a>
                <a href="#5">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
        </div>
        {/* <Pagination /> */}
      </main>
      <CreatePost />

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
