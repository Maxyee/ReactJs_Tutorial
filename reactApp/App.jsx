import React from 'react';

class App extends React.Component
{
  //below this constarctor super is for statefull example code :
  constructor(){
    super();
    this.state = {
      data:
      [
        {
            "id":1,
            "name":"Mohon",
            "age":"24"
        },
        {
            "id":2,
            "name":"Eyamin",
            "age":"23"
        },
        {
            "id":3,
            "name":"Julhas",
            "age":"22"
        }
      ]
    }

    // this.state = {
    //   header: "This is Header",
    //   content: "This is Content"
    // }
  }


  render()
  {
    var i = 1;

    var mystyle = {
      color: 'red',
      fontSize:20
    }

    return(
      <div>
          <h1>Header</h1>
          <h2>Content</h2>
          <p data-myattribute="somevalue">This is Content of paragraph</p>
          Hello World!!!
          <h1>{1+1}</h1>
          <h2>{i == 1 ? 'True!' : 'False'}</h2>
          <p >Hello Julhas How are you :P</p>
          <p style = {mystyle} >This is how i add style into ReactJS</p>
          
          {/*Below this two line is for statefull example*/}
          <Header/>
          <Content/>

          {/*Now making a table data using stateless example*/}
          <table>
              <tbody>
                { this.state.data.map((person,i) => <TableRow key = {i} data = {person} />) }
              </tbody>
          </table>

             {/*This is the state header and content message*/}
             {/*<h1>{this.state.header}</h1>
             <h2>{this.state.content}</h2>*/}

           {/*<h1>{this.props.headerProps}</h1>
           <h2>{this.props.contentProps}</h2>  */}
      </div>
    );
  }
}

// App.defaultProps = {
//   headerProps = "This is header prop",
//   contentProps = " this is content props"
// };
//lets try stateless Example :

class Header extends React.Component {
  render(){
    return (
      <div>
          <h1>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render(){
    return(
      <div>
          <h2>Content</h2>
          <p>The content text !!!</p>
      </div>
    );
  }
}
export default App;

//lets try statefull Example :

class TableRow extends React.Component {
    render(){
        return(
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
          </tr>
        );
    }
}