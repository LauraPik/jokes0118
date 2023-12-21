
const Cat = (props) =>{
    return(

<div class="card" style={{width: '18rem'}}>
  <div className="card-body">
    < img src={props.url}/>
    <h5 className="card-title">Card title</h5>
<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
    <p class="card-text">{props.description}</p>
   
  </div>
</div>
    )
}

export default Cat