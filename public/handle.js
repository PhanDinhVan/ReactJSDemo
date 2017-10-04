// create component
// function AnhPhan(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class AnhPhan extends React.Component{
  render(){
    return(
      <div>
        <h1 className="yellow"> Anh Phan - Dinh Vu </h1>
        <h1> Anh Phan - Dinh Van </h1>
      </div>
    );
  }
};

class EmPhan extends React.Component{
  render(){
    return(
      <div>
        <h1 className="red"> Vu Phan - Dinh Vu </h1>
        <h1> Van Phan - Dinh Van </h1>
      </div>
    );
  }
};


// ReactDOM.render() la render cai gi va o dau?
ReactDOM.render(
  <div>
    <AnhPhan />
    <EmPhan />
  </div>
  , document.getElementById("root"));

  // ReactDOM.render(
  //   <div>
  //     <h1 className="red"> Anh Phan - Dinh Vu </h1>
  //     <h1 className="red"> Anh Phan - Dinh Van </h1>
  //   </div>
  //   , document.getElementById("root1"));
