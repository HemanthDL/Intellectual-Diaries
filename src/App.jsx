import './App.css'
import Navbar from './componen/navbar'
import Footer from './componen/footer'
import Card from './componen/card'
import { useEffect,useState } from 'react'

function App() {
  // const URL = useRef("");
  const [cards, setcards] = useState([]);
  const data_fetching = async ()=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let contents = await res.json();
    let data = contents.sort((a,b)=> 0.5 - Math.random());
    setcards(data);
    console.log("data is : ",data); 
  }
  useEffect(() => {
    data_fetching();
  }, []);

  
  
  return (
    <>
      <Navbar/>
      <div className="cards">
        {cards.map((card)=>(
            <Card key = {card.id} title = {card.title} desc = {card.body} userId = {card.userId}/>
        ))}
        
      </div>
      <Footer/>
    </>
  )
}

export default App
