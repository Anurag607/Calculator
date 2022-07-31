import './style.css';

function Num(props) {
  return (
    <span className= "numkey">{props.number}</span>
  );
}

function Numkeys() {
  const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0"];
  var rows = [];
  keys.forEach(function (ele) {
    rows.push(<Num number={ele} />);
  });

  return (
  <div className='keypad'>
    {rows}
    <span id="del"><img src={process.env.PUBLIC_URL+"images/backspace.svg"}  alt="del" /></span>  
  </div>
  )
}

// function Binary(props) {
//   return (
//     <span className= "binarykey">{props.operator}</span>
//   );
// }

function App() {
  return (
    <div className="app">
      <div className= "output">
        <section className= "screen" data-state="begin"></section>
      </div>
      <div className="binary b1 op">
        <span id="clear">AC</span>
        <span id= "pi">∏</span>
        <span id= "percentage">%</span>
        <span className= "binarykey">/</span>
      </div>
      <div className="binary b2 op result">
        <span className= "binarykey">*</span>
        <span className= "binarykey">+</span>
        <span className= "binarykey">-</span>
        <span id="result">=</span>
      </div>
      <Numkeys />
    </div>
  )
}

export default App;