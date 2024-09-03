const Category = (props) => {
  return (
    <>
      <div className='responsive center-align middle-align'>
        {/* <nav className='scroll'> */}
        <a onClick={props.search}>{props.title}</a>
        {/* <a onClick={() => apiCaller('sake')}>Pokemon</a>
          <a onClick={() => apiCaller('sake')}>Beach</a>
          <a onClick={() => apiCaller('sake')}>Docker</a> */}
        {/* </nav> */}
      </div>
    </>
  )
}

export default Category