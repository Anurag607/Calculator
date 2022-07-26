import './style.css';

function App() {
  return (
    <div>
      <div>
        <div class= "output">
            <section class= "screen" data-state="begin"></section>
        </div>
        <div class="binary b1 op">
            <span id="clear">AC</span>
            <span id= "pi">∏</span>
            <span id= "percentage">%</span>
            <span class= "binarykey">/</span>
        </div>
        <div class="binary b2 op result">
            <span class= "binarykey">*</span>
            <span class= "binarykey">+</span>
            <span class= "binarykey">-</span>
            <span id="result">=</span>
        </div>
        <div class= "keypad">
            <span class= "numkey">7</span>
            <span class= "numkey">8</span>
            <span class= "numkey">9</span>
            <span class= "numkey">4</span>
            <span class= "numkey">5</span>
            <span class= "numkey">6</span>
            <span class= "numkey">1</span>
            <span class= "numkey">2</span>
            <span class= "numkey">3</span>
            <span class= "numkey">.</span>
            <span class= "numkey">0</span>
            <span id="del"><img src={process.env.PUBLIC_URL+"images/backspace.svg"}  alt="del" /></span>
        </div>
      </div>
    </div>
  )
}

export default App;