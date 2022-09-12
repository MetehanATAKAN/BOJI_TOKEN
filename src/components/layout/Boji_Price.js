import React , { useEffect } from 'react'

const BojiPrice = () => {

    useEffect(() => {
        // try {
        //     const x =document.querySelector('.hero-gradient').classList.add = 'metehanatakan';
        // } catch (error) {
        //     console.log('catch de');
        // }
        const x =document.querySelector('.hero-gradient');
        x.classList.add('boji_chart');
        console.log(x);
    }, [])
    
  return (
    <div>
       <iframe title='iframe' width="100%" height="1000" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/bnb-0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164?theme=dark&padding=16&chart=1&trades=1"></iframe>
    </div>
  )
}

export default BojiPrice