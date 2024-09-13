import Cards from '@/app/_components/SharedComponents/Cards'
import React from 'react'
import athlete from '@/app/data/athlete'
const page = () => {
  return (
    <>
    {athlete.map((el=>{return<div><Cards MainTitle={el.MainTitle} Views={el.Views} 
      Title={el.Title} Description={el.Description} Price={el.Price}
      User={el.User.first} Date={el.Date}/></div>}))}

    {athlete.map((el=>{return<div><Cards Views={el.Views} 
      Title={el.Title} Description={el.Description} Price={el.Price}
      User={el.User.second} Date={el.Date}/></div>}))}

    {athlete.map((el=>{return<div><Cards Views={el.Views} 
      Title={el.Title} Description={el.Description} Price={el.Price}
      User={el.User.third} Date={el.Date}/></div>}))}

    {athlete.map((el=>{return<div><Cards Views={el.Views} 
      Title={el.Title} Description={el.Description} Price={el.Price}
      User={el.User.fourth} Date={el.Date}/></div>}))}
    </>
  )
}

export default page