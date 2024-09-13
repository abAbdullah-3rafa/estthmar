import React from 'react'
import industrial from '@/app/data/industrial'
import Cards from '@/app/_components/SharedComponents/Cards'


const page = () => {
  return (
    <>
      {industrial.map((el=>{return<div><Cards MainTitle={el.MainTitle} Views={el.Views} 
      Title={el.Title} Description={el.Description} Price={el.Price}
      User={el.User} Date={el.Date}/></div>}))}

      {industrial.map((el=>{return<div><Cards Views={el.Views} 
      Title={el.Title} Description={el.Description} Price={el.Price}
      User={el.User} Date={el.Date}/></div>}))}

      {industrial.map((el=>{return<div><Cards Views={el.Views} 
      Title={el.Title} Description={el.Description} Price={el.Price}
      User={el.User} Date={el.Date}/></div>}))}
    </>
  )
}

export default page