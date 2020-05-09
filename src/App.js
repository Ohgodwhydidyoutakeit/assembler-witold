import React from "react";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      registry: {
        AX: 1,
        BX: 2,
        CX: 3,
        DX: 4,
      },
    };
    this.setDefault = this.setDefault.bind(this);
    this.useMov = this.useMov.bind(this);
  }
  setDefault() {
    let a, b, c, d;
    a = document.getElementById("AX").value;
    b = document.getElementById("BX").value;
    c = document.getElementById("CX").value;
    d = document.getElementById("DX").value;
    if (a === "") {
      a = this.state.registry.AX;
    } else if (b === "") {
      b = this.state.registry.BX;
    } else if (c === "") {
      c = this.state.registry.CX;
    } else if (d === "") {
      d = this.state.registry.DX;
    }

    this.setState({
      registry: {
        AX: a,
        BX: b,
        CX: c,
        DX: d,
      },
    });
  }
  useMov() {
    let select = document.getElementById("select").value;
    let space = document.getElementById("space").value;
    //if space is equal to one of them just copy value else assign value

    if (space === "AX") {
      this.setState({
        registry : {...this.state.registry, [select]: this.state.registry.AX}
    })
    
    } else if (space === "BX") {
      this.setState({
        registry : {...this.state.registry, [select]: this.state.registry.BX}
    })
    } else if (space === "CX") {
      this.setState({
        registry : {...this.state.registry, [select]: this.state.registry.CX}
    })
    } else if (space === "DX") {
      this.setState({
        registry : {...this.state.registry, [select]: this.state.registry.DX}
    })
    } else {
      this.setState({
        registry : {...this.state.registry, [select]: space}
    })
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="nav">
          <div>Symulator move intel 8086</div>
          <div>Witold Lipowski</div>
        </div>
        <div className="main-box">
          <div className="inputs">
            <div>Set default registry</div>
            <div>
              <label>AX:</label>
              <input type="text" id="AX"></input>
              <label>BX:</label>
              <input type="text" id="BX"></input>
              <label>CX:</label>
              <input type="text" id="CX"></input>
              <label>DX:</label>
              <input type="text" id="DX"></input>
              <button onClick={this.setDefault}>SET ME</button>
            </div>
            <div className="mov">
              <p>MOV (if the value is equal to registry he will copy it)</p>
              <div>
                <label>mov</label>
                <select id="select">
                  <option>AX</option>
                  <option>BX</option>
                  <option>CX</option>
                  <option>DX</option>
                </select>
                <input type="text" id="space"></input>
                <button onClick={this.useMov}>send</button>
              </div>
            </div>
          </div>
          <div className="registry-view">
            <label>AX:</label>
            <div>{this.state.registry.AX}</div>
            <label>BX:</label>
            <div>{this.state.registry.BX}</div>
            <label>CX:</label>
            <div>{this.state.registry.CX}</div>
            <label>DX:</label>
            <div>{this.state.registry.DX}</div>
          </div>
        </div>
        <div className="footer">
          <p ><a href="https://github.com/Ohgodwhydidyoutakeit/assembler-witold.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
      </div>
    );
  }
}

export default App;
