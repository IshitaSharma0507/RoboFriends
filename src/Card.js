import React  from 'react';

/* const Card =(props) ={ 
const {name,email,id}= props then we can do {name} rather than {props.name} other way is below both are ways of destructuring
or we can just do (props) an use props.name*/
const Card = ({name,email,id}) =>{
    
    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">   {/* tachyons class that are predefined */}
<img src ={`https://robohash.org/${id}?200x200`} alt="profile"/>
<div>
    <h2>{name}</h2>
    <p>{email}</p>

   
    </div>
        </div>
    );
}
export default Card;