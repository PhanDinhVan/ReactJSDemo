
var list;

class Note extends React.Component{
  constructor(props) {
    super(props);
    // this.state = { num: 0 };
    // this.Number = this.Number.bind(this);

  }

  //
  // getInitialState(){
  //   // return {num: 0};
  //   return {num: 0};
  // }
  //
  // Number(){
  //   this.state.num = this.state.num + 1;
  //   this.setState(this.state);
  // }

  render(){
    return(
      <div className="div-note">
         {this.props.children}
      </div>
    );
  }
};

class InputDiv extends React.Component{

  send(){
        list.setState({array: list.state.array.concat(this.refs.txt.value)});
        this.setState(this.state);
  }

  render(){
    return(
        <div>
            <input type="text" ref="txt" placeholder="Enter you note" />
            <button onClick={this.send}> Send </button>
        </div>
    );
  }
};

function addDiv(){
  ReactDOM.render(<InputDiv />, document.getElementById("add"));
}

class List extends React.Component{
  constructor(props) {
    super(props);
    this.state = { array: ["ThuPhan","VanPhan","VuPhan"] };
    // this.Number = this.Number.bind(this);

  }

  getInitialState(){
    list = this;
    return {array: ["ThuPhan","VanPhan","VuPhan"]};
  }

  render(){
    return(
      <div className="div-list">
        <div id="add"></div>
        <button onClick={addDiv}> Add Div </button>
        {
            this.state.array.map(function(value,index){
            return <Note key={index}> {value} - {index} </Note>
          })
        }
      </div>
    );
  }
};

// ReactDOM.render() la render cai gi va o dau?
ReactDOM.render(

  <div>
    <List />
  </div>

  , document.getElementById("root2"));
