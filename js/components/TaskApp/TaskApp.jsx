var TaskApp = React.createClass({
  getInitialState: function() {
    return {
      items : [],
      newTask : ''
    };
  },
  onChangeEVent: function(e){
    this.setState({newTask: e.target.value});
  },
  addTask: function(e){
    e.preventDefault();
    this.setState({items: this.state.items.concat([this.state.newTask])});
    this.setState({newTask:''});
  },
  handleTaskDelete: function(e){
    var taskIndex = e.index;
    var x = this.state.items;
    x.splice(taskIndex,1);
    this.setState({items: x});
  },
  render: function() {
    return (
      <div>
        <h2> My Tasks</h2>
        <div>
          <form onSubmit={this.addTask}>
            <input onChange={this.onChangeEVent} name="newTask" value={this.state.newTask}  />
            <button>Add</button>
          </form>
        </div>
        <TaskList items={this.state.items} onTaskDelete={this.handleTaskDelete}/>
      </div>
    );
  }
});
