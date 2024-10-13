import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
// import React from "https://cdnjs.cloudflare.com/ajax/libs/react/17.0.0/cjs/react.production.min.js";
// import ReactDOM from "https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.0/cjs/react-dom.production.min.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesAndAuthors: [
        ["A friend to all is a friend to none.", "Aristotle"],
        ["If you tell the truth, you don't have to remember anything.", "Mark Twain"],
        ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi"],
        ["Knowing yourself is the beginning of all wisdom.", "Aristotle"]
      ],
      randomNum: Math.floor(Math.random() * 4)
    }
  }
    
  render(){
    return (
    <div id={"quote-box"}>
      <div id={"text"}><p>{this.state.quotesAndAuthors[this.state.randomNum][0]}</p></div>
      <div id={"author"}>{this.state.quotesAndAuthors[this.state.randomNum][1]}</div>
      <button id={"new-quote"} onClick={()=>{this.setState({randomNum: Math.floor(Math.random() * 4)});}}>New quote</button>
      <br />
      <a id={"tweet-quote"} href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(this.state.quotesAndAuthors[this.state.randomNum][0])}"++${encodeURIComponent(this.state.quotesAndAuthors[this.state.randomNum][1])}`} target={"_blank"}>Tweet</a>
    </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));

