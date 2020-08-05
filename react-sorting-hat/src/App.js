import React, {useState} from 'react';
import houses from './components/Houses.json';
import styled from 'styled-components'

function App() {
  const [house, setHouse]=useState("");

  
  const Styles = styled.div`
  label{
    transition: 0.4s;
  }

  .container {
    display: flex;
    margin: auto;
    text-align: center;
    margin-top: 50px;
    width: 800px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    height: 800px;
    border: inset 4px gold;
  }
  .container:hover{
    border: outset 4px gold;
  }
  
  *{
    box-sizing: border-box;
  }

  form{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 400px;
    align-content: space-between;
    padding: 20px;
    color: white;
    font-weight: bold;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  }
  
  .house{
    height: 100vh;
    width : inherit;
    display: flex;
    flex-flow : column wrap;
    justify-content:center;
    align-items: center;
    color: white;
  }
  
  .houseImage{
    max-height:250px; max-width : 250px;
  }
  
  h2, p{
    text-shadow: 3px 3px #fff;
  }

  label:hover{
    color:black;
  }

  button{
    border-radius:0px;
    font-size:35px;
    position:absolute; 
    top:10%;
    background: rgba(0,0,0,0.0);
    border-width: 0px;
    border-style: none;    
  }
    
  .content{
    display: flex;
    flex-flow:column wrap;
    justify-content:center;
    align-content: center;
  }
  
  `



  
  function handleClick(e){
    e.preventDefault();
    
    let housesArray=[1,2,3,4]
    const sortedHouse= housesArray[Math.floor(Math.random()*4)]
    setHouse(sortedHouse)
    if(house){
      getColour()
    }
    console.log(sortedHouse)
  }
  
  function getColour(){
    if(house){
      const selected=houses.find(h => h.id === house );
      const color = selected.color;
      return color;
    }
    else return "black"
    
  }

  return (
    <Styles>  
      <div className="container"  >
        <div className="house" >
          <button onClick={handleClick}><img className="ButtonText" src="https://i.ibb.co/pzjMB68/sort.png" alt="sort" border="0"/></button>
          <div className="content">
          {house ? houses.filter(h=>h.id===house).map(house=>(
            <div key={house.id}>
              <div style={{textAlign:"center"}} className="content">
            <h2 className="welcome">WELCOME TO {house.name.toUpperCase()}</h2>
            </div>
            <div className="content">
            <img src={house.img} alt={house.name} className="houseImage"/>
            </div>
            </div>
          )) : (<p>
                  <form onSubmit={handleClick}>
                    <label>
                      Name?:
                      <input type="text" name="name" />
                    </label><br/>
                    <label>
                      Age?:
                      <input type="text" name="name" />
                    </label><br/>
                    <label>
                      Color?:
                      <input type="text" name="name" />
                    </label><br/>
                    <label>
                      Animal?:
                      <input type="text" name="name" />
                    </label><br/>
                    <label>
                      Food?:
                      <input type="text" name="name" />
                    </label><br/>
                    <label>
                      Sport?:
                      <input type="text" name="name" />
                    </label><br/>
                    <input type="submit" value="Submit" />
                  </form>
                </p>
          )}
        </div>
        </div>
        
      </div>
    </Styles>
  );
}

export default App;