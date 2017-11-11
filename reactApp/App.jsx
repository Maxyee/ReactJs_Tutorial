import React from 'react';

class App extends React.Component
{
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
      </div>
    );
  }
}
export default App;