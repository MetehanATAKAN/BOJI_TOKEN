import React, { useState, useEffect } from 'react'

const Price = () => {

    const [bojiPrice, setBojiPrice] = useState();

  console.log(bojiPrice);

  useEffect(() => {
    fetch('https://api.pancakeswap.info/api/v2/tokens/0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164')
    .then(response=>response.json())
    .then(response=>setBojiPrice(response.data.price.slice(0,17)))
    .catch(error=>console.log(error))
  }, [])

  return (
    <>
        <div className='price'>
          <div>
          $
          {bojiPrice}
          </div>
        </div>
    </>
  )
}

export default Price