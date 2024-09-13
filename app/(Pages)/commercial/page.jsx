import Cards from '@/app/_components/SharedComponents/Cards'
import commercial from '@/app/data/commercial'
import React from 'react'


const page = () => {
  return (
    <>
        {commercial.map((el=>{return<div><Cards MainTitle={el.MainTitle.second} Views={el.Views.first} 
        Title={el.Title.first} Description={el.Description.first} Price={el.Price.first}
        User={el.User.first} Date={el.Date}/></div>}))}

        {commercial.map((el=>{return<div><Cards Views={el.Views.second} 
        Title={el.Title.second} Description={el.Description.second} Price={el.Price.second}
        User={el.User.second} Date={el.Date}/></div>}))}
        
        {commercial.map((el=>{return<div><Cards Views={el.Views.first} 
        Title={el.Title.first} Description={el.Description.first} Price={el.Price.first}
        User={el.User.third} Date={el.Date}/></div>}))}

        {commercial.map((el=>{return<div><Cards Views={el.Views.second} 
        Title={el.Title.second} Description={el.Description.second} Price={el.Price.second}
        User={el.User.fourth} Date={el.Date}/></div>}))}
    </>
  )
}

export default page