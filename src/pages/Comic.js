import React, { useEffect } from 'react';
import Title from '../components/Title';
import Vote from '../components/Vote';

// Retorna un entero aleatorio entre un rango definido.
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function App() {
  const [list, setList] = React.useState([]);
  const testURL = '/'+getRandom(1, 2466)+'/info.0.json';
	const myInit = { method: 'GET'};
	const myRequest = new Request(testURL, myInit);

  useEffect(() => {
    async function fetchData(){
        await fetch(myRequest)
        .then(function(response) {
            return response.json();
        }).then(data => {
            setList(data);
        }).catch(function(e){
            console.log(e);
        });
    }
    fetchData();
  // eslint-disable-next-line
  }, []);

  return (
    <div>
      <br /><br />
      <Title title={list.title} image={list.img}/>
      <Vote />
    </div>
  )
}
