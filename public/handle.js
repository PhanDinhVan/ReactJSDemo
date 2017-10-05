// create component
// function AnhPhan(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// function khi click button trong component

// goi function o ngoai componet
function getName(){
  alert("Dinh Van");
}

// function ngoai CPN
function getNameBien(name){
  alert(name);
}

class Amagumo extends React.Component{
  // khai bao cho props - state
  constructor(props) {
    super(props);
    this.getInfor = this.getInfor.bind(this);


    this.state = { tongHocVien: this.props.tongHocVien };
    this.addStudent = this.addStudent.bind(this);

  }

  // function khi click button trong component - props
  getInfor() {
    alert(this.props.children);
  }

  //cho nay dung cho state
  getInitialState(){
    // return {tongHocVien: 10};
    // lay gia tri cua thang props gan cho state de co the thay doi duoc
    return {tongHocVien: this.props.tongHocVien};
  }
//cho nay dung cho state button addStudent
  addStudent(){
    // dung cho state co 1 thuoc tinh
    // this.setState({tongHocVien: parseInt(this.state.tongHocVien) + 1});
    // nen dung cach nay, vi no dung cho state co nhieu thuoc tinh ^^
    this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
    this.setState(this.state);
  }

  render(){
    return(
      <div>
        <h1 className="yellow">{this.props.name}-{this.props.teacher} </h1>
        <div>So hoc vien: {this.state.tongHocVien}</div>
        <KhoaHoc />
        <p>{this.props.children}</p>
        <button onClick={this.getInfor}>Function trong CPM</button>
        <button onClick={getName}>Function ngoai CPM</button>

        <button onClick={()=>{
          var str = 'Teacher' + ' ' + this.props.teacher + ' ' + 'teach' + ' ' + this.props.name;
          getNameBien(str)
        }}>
          Function ngoai truyen bien
        </button>
        <button onClick={this.addStudent}>Add student</button>
      </div>
    );
  }
};

class KhoaHoc extends React.Component{
  render(){
    return(
      <div>
        <h3>Lap trinh ReactJS</h3>
      </div>
    );
  }
};

// Ref trong ReactJS
class InputTag extends React.Component{

  show(){
    // var text = this.refs.txt.value;
    var text = this.refs.sl.value;
    alert(text);
  }

  render(){
    return(
      <div>
        <select ref="sl">
          <option value="Iphone">Iphone</option>
          <option value="SamSung">SamSung</option>
          <option value="Sony">Sony</option>
        </select>
        <input type="text" ref="txt" />
        <button onClick={this.show.bind(this)}>Show</button>
      </div>
    );
  }
};


class AnhPhan extends React.Component{
  render(){
    return(
      <div>
        <h1 className="yellow"> Anh Phan - Dinh Vu </h1>
        <p className="blue">{this.props.children}</p>
        <button onClick={this.getInfor}>Click</button>
      </div>
    );
  }
};


// create component
class EmPhan extends React.Component{
// khai bao cho props, k co cai nay no k hieu props
  constructor(props) {
    super(props);
    this.getInfor= this.getInfor.bind(this);
  }
  // function khi click button trong component
  getInfor() {
    alert(this.props.children);
  }

  render(){
    return(
      // this là chính nó(ở đây là component EmPhan), props là thuộc tính,
      // name là tên biến được truyền vào ở ReactDOM.render
      <div>
        <h1 className="red"> {this.props.name} - {this.props.specialized} </h1>
        <p className="blue">{this.props.children}</p>
        <button onClick={this.getInfor}>Click</button>
      </div>
    );
  }
};

class Father extends React.Component{
  render(){
    return(
      <div>
        <h1 className="yellow">Đây là component cha</h1>
        <Childrens />
      </div>
    );
  }
};

class Childrens extends React.Component{
  render(){
    return(
      <div>
        <h3 className="red">Đây là component con ^^</h3>
      </div>
    );
  }
};


class Video15 extends React.Component{
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.Number = this.Number.bind(this);

  }

  getInitialState(){
    // return {num: 0};
    return {num: 0};
  }
  Number(){
    this.state.num = this.state.num + 1;
    this.setState(this.state);
  }

  render(){
    return(
      <div>
        <button className="btn" onClick={this.Number}>Hello {this.state.num}</button>
      </div>
    );
  }
};

// ReactDOM.render() la render cai gi va o dau?
ReactDOM.render(
  <div>
    <Video15 />
    <InputTag />
    <Amagumo name="ReactJS" teacher="Mr. Philippe" tongHocVien="10">Khoa hoc ReactJS</Amagumo>
    <Amagumo name="NodeJS" teacher="Mr. Van" tongHocVien="20">Khoa hoc NodeJS</Amagumo>
    <AnhPhan> Children of AnhPhan</AnhPhan>
    <EmPhan name="Mr. Van" specialized="Teacher">Đây là thuộc tính Children</EmPhan>
    <Father />



  </div>
  , document.getElementById("root"));

  // ReactDOM.render(
  //   <div>
  //     <h1 className="red"> Anh Phan - Dinh Vu </h1>
  //     <h1 className="red"> Anh Phan - Dinh Van </h1>
  //   </div>
  //   , document.getElementById("root1"));
