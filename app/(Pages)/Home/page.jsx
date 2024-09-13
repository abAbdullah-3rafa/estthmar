import React from 'react'
import HeroSection from '@/app/_components/HeroSection'
import Cards from '@/app/_components/SharedComponents/Cards'
import home from '@/app/data/home'
import Stats from '@/app/_components/SharedComponents/Stats'

const page = () => {
  return (
    <div>
      <HeroSection />

      {home.map((el=>{return<div><Cards MainTitle={el.MainTitle} Views={el.Views.first} 
      Title={el.Title.first} Description={el.Description.first} Price={el.Price.first}
      User={el.User.first} Date={el.Date}/></div>}))}

      {home.map((el=>{return<div><Cards  Views={el.Views.second} 
      Title={el.Title.second} Description={el.Description.second} Price={el.Price.second}
      User={el.User.second} Date={el.Date}/></div>}))}

        <Stats />
    </div>
    
  )
}

export default page