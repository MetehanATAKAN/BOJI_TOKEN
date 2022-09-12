import React, { useState, useEffect } from 'react'

const Price = () => {

    const [bojiPrice, setBojiPrice] = useState();

  useEffect(() => {
    fetch('https://api.pancakeswap.info/api/v2/tokens/0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164')
    .then(response=>response.json())
    .then(response=>setBojiPrice(response.data.price.slice(0,17)))
    .catch(error=>console.log(error))
  }, [])

  const addClass = () => {
    document.querySelector('.hero-gradient').classList.add = 'metehanatakan';
  }

  return (
    <>
        <div onClick={addClass} className='price'>
          <div>
         <a href='/chart' target={'_blank'} >
         $
          {bojiPrice}
         </a>
          </div>
        </div>
    </>
  )
}

export default Price