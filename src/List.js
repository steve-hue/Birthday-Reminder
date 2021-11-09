import React from "react";

// const List=({people})=>{
//     return (
//         <>
//         {people.map((person) => {
//             const {id,name,age,image}=person;
//             return (
//                 <article key={id} className="person">
//                     <img src={image} alt={name}  />
//                     <div>
//                         <h4>{name}</h4>
//                         <p>{age} years</p>
//                     </div>
//                 </article>
//             );
//         })}
//         </>
//     );
// };

function person(n){
    return(
        <article key={n.id} className="person">
            <img src={n.image} alt={n.name}  />
            <div>
                <h4>{n.name}</h4>
                <p>{n.age} years</p>
            </div>
        </article>
    );
}

function List({people}){
    return(<>
        {people.map(person)}
    </>

    )
}


export default List;