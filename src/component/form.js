import React from 'react';
import ReactDOM from 'react-dom';

export class Hello extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {addtask: '', tasks:[{name:'therichpost'}]};
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }
    
    addValue(evt)
    {
      evt.preventDefault();
        
        let tasks = this.state.tasks;
        let addtask = this.state.addtask;
        tasks.push({name:addtask});
        this.setState({tasks:tasks});
        console.log(tasks);
    }
    updateInput(evt){
      this.setState({addtask: evt.target.value});       
        }
    
    render()
    {
      return (
      <div>
      <h1>{this.state.value}</h1>
       <ul>
        {
        //map array data
        this.state.tasks.map(function(val){
          return <li key={val.name}>{val.name}</li>
        })
        }
        </ul>
      <input type="text" onChange={this.updateInput} /><br/><br/>
      <input type="button" value="Click Me :)" onClick={this.addValue}/>
      </div>
      )
    }
  }
  export default Hello;