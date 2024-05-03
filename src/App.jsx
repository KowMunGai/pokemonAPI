import axios from 'axios';
import {useEffect, useState} from 'react';

import './App.css'

function App(){


  var chName
  const [data, setData] = useState();
  const [name, setName] = useState("pikachu");
  const [img, setImg] = useState();
  // const [ab, setAb] = useState();
  URL = `https://pokeapi.co/api/v2/pokemon/${name}`


  var URL2 = "https://pokeapi.co/api/v2/pokemon/cyndaquil"
  // const [data2, setData2] = useState();
  const [name2, setName2] = useState();
  const [img2, setImg2] = useState();

  useEffect(() => {
    axios.get(URL).then((response) => {
      
      setData(response.data);
      setName(response.data.name);
      // setImg(response.data.sprites.back_default);
      setImg(response.data.sprites.other.showdown.back_default);
    }).catch((err) => {
      window.alert(err);
    });
  }, [URL]);

  useEffect(() => {
    axios.get(URL2).then((response) => {
      
      // setData2(response.data);
      setName2(response.data.name);
      setImg2(response.data.sprites.front_default);
      setImg2(response.data.sprites.other.showdown.front_default);
    }).catch((err) => {
      window.alert(err);
    });
  }, []);

  const show = () => {
    URL = `https://pokeapi.co/api/v2/pokemon/${name}`
  }

  return(
    <div className="App">
      <h2>Pokemon API</h2>
      <div className='area' style={{position: 'relative'}}>
        <img src="https://i.pinimg.com/564x/99/26/ce/9926cea75b7feebf809ee0d9bf576f21.jpg" alt="" />

        <img className="img" src={img} alt="" />
        <div className="name">{name}</div>
        
        <img className="img2" src={img2} alt="" />
        <div className="name2">{name2}</div>

        <div className="skillList">
          {data? data.abilities.map((value, key) => {
            return (
              <div className="skillName" key={key}>
                {value.ability.name}
              </div>
            )
          }):""}
        </div>

        <select className="chooseChar" id="charSet" onChange={(e) => {setName(e.target.value)}}>
          <option value="pikachu">Pikachu</option>
          <option value="gardevoir">Gardevoir</option>
          <option value="lugia">Lugia</option>
          <option value="mewtwo">Mewtwo</option>
          <option value="dialga">Dialga</option>
          <option value="zekrom">Zekrom</option>
          <option value="lunala">Lunala</option>
          <option value="melmetal">Melmetal</option>
          <option value="regirock">Regirock</option>
          <option value="latios">Latios</option>
        </select>

      </div>
    </div>
  );
}

export default App
