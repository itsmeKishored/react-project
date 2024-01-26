import React from 'react'
import Service from '../Service'
import Footer from '../Footer'
import Reducer from '../Reducer'
import ExampleComponent from '../Effect'
import Counter from '../Counter'
import Counter2 from '../Counter2'

export default function Home() {
  return (
    <div> 
      <Service/>
      <Service/>
      <Service/>
    
      <ExampleComponent/>
      <Counter/>
      <Counter2/>
        <Reducer/>
        <Footer/>
  </div>
    
  )
}
