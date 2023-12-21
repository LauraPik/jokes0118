
import { useEffect, useState } from "react";
import Breed from "../breed/Breed"


const Search = (props) =>{
    const[cats, setCats] = useState([]);

    useEffect(()=>{
        try{
          fetch('https://api.thecatapi.com/v1/breeds')
          .then(response => response.json()
          .then(data=> setCats(data))
          
          )
          
        }catch(msg){
          console.log(msg)
        }
    
      }, [])

      

    return(
        <>
        <label for="breed">Pasirinkite veisle:</label>
        <input list="breed-list" id="breed" name="breeds" onChange={props.onSearch}/>

        <datalist id="breed-list">
        {cats?.map((cat)=>
            <option value={cat.id}>{cat.name}</option>
            )}
        </datalist>

        </>
    )

}

export default Search