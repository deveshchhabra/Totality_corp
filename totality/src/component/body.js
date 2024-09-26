import { useState } from "react"
import {Data} from "../constants"
import { Link } from "react-router-dom"
  const Card = ({ title, location, price, type,state }) => {
    return (
        <>
      <div className='card'>
        <div>Best of {state.toUpperCase()}</div>
        <img
          alt='home'
          src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/37/76/02/delhi-haat-janakpuri.jpg?w=1200&h=1200&s=1'
        />
  
        <div className='text'>
          <h4>{title}</h4>
          <h4>{location + ','+state}</h4>
          <h4>{'₹'+price.toLocaleString() }</h4>
          <h4>{type}</h4>
        </div>
      </div>
      </>
    )
  }
  function filterdata (Input,Price){
    const result=Data.find((item)=>item[Input.toLowerCase()])[Input.toLowerCase()]
    // const res=Data.find((item) =>Object.keys(item).includes(Input.toLowerCase()))[Input]
    const rt1=result.filter((obj)=> obj.price == Price)
    console.log(rt1)

    return rt1
  }  
  const res=Data.find((item) => item.delhi).delhi
//   const FilterData=Data.find((item)=>console.log(item));

  const Body = () => {
    const [Rental, setRental] = useState(res);
    const [Input, setInput] = useState('delhi');
    const [Price, setPrice] = useState('10000');
    return (
      <>
      <main>
        <h1 className='Main-Title'>
          Welcome to Totally Group Rental Properties 
        </h1>
        <h1 className="operated-in">
          we are operated in Delhi,Mumbai,Bangalore
        </h1>
        <div className="search-container">
            <input type="text" className="search-input" value={Input} onChange={(e)=>{setInput(e.target.value)}} placeholder="Delhi,Mumbai,Bangalore"/>
            <input type="range" id="volume"  name="volume" value={Price} min="10000" max="100000" step="10000"  onChange={(e)=>{setPrice(e.target.value)}} />
<label htmlFor="volume">{Price}</label>

            <br/>
            <hr/>
            <button type="text" className="search-input" onClick={()=>{const data=filterdata(Input,Price);
                setRental(data);
            }}>Location</button>
        </div>
        <div className='properties-list'>
         {Rental.map((data) => {
          return <Link to={"/BookMenue/"+data.state+"/"+data.id } key={data.id}>
            <Card {...data} />;</Link>
        })}
        </div>
        
        </main>
      </>
    )
  }
  export default Body;