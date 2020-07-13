import React, {useState} from 'react';



function App() {
  const [lightOn, setLightOn] = useState(false);

  const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

  return (
    <div onClick={() => setLightOn(!lightOn)} className="App">
      {lightOn ? (
      <img src={yellow} />
       ) : (
       <img src={white} />
       )}
    </div>
  );
}
export default App;
