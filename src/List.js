import React from 'react';

const List = ({people}) => {
  // const card = data.map(item => (
  // <List img={item.image} name={item.name} age={item.age} />
  // ))

  return (
    people.map(person => {
      const {id, name, age, image} = person 
      return (
      <article key={id} className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>

       </article>
      )
    }
    ))
  }


  //   <div className='person'>
  //     <img src={img} />
  //     <h3>{name}</h3>
  //     <p>{age} years </p>
  //   </div>
  // );

export default List;
