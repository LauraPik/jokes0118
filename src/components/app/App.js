import { useEffect, useState } from "react";
import Cat from "../cat/Cat";
import Search from "../search/Search";


function App(props) {

  const[breeds, setBreeds] = useState([]);//initial state

  const [online, setOnline] = useState(false)

  const [search, setSearch] = useState(false)

  console.log(online)
  const handleChange = ((e)=>{
    e.preventDefault() 
    setOnline(true)
  })

  const handleSearch = (event) =>{
    setSearch(event.target.value)
   

  }

  useEffect(()=>{
    if(search){
    try{
      fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
      .then(response => response.json()
      .then(data=> setBreeds(data))
      
      
      )
      

    }catch(msg){
      console.log(msg)
    }
  }
  }, [search])






    return (
      <div className="App">
        <div className="container">
        <p>{online}</p>
        <Search onSearch = {handleSearch}/>
        <div className="d-flex flex-row flex-wrap"> 
        { breeds?.map((cat)=>
          <Cat  key={cat.id} url={cat.url}/>

        )

        }
        </div>
        
        </div>
        <button onClick = {handleChange}>Paspausk</button>
      </div>
    );
}

export default App;


