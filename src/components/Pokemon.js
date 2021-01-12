import React, {useState, useEffect} from 'react';


const Pokemon = () => {
    
    const [poke, setPoke] = useState([]);
 
  
        
        const getPokemon =(e)=>{
            
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=> {
                return response.json()
            })
            .then(response =>{
                setPoke(response.results)
            })
            .catch(err=>{
                console.log(err)
            })
            
        }


    return (
        <>
        <div>
            <button style={{margin:'20px'}} onClick={getPokemon}>Click here for pokemon</button>
            {
                poke.map((pokeobj,i) =>{
                    return <div className="card p-2 mb-2 center-text"  style={{width:'20%', margin:'0 auto'}}  key={i}> {i+1} {pokeobj.name}</div>
                })
            }
        </div>
        </>
    );
};



export default Pokemon;