var TaskList = React.createClass({
  removeTask: function(e){
    var taskIndex = e.target.attributes['data-index'].value;
    this.props.onTaskDelete({name:this.props.items[taskIndex], index: taskIndex});
  },
  render: function() {
    var showItems = (item, idx) => (
      <li>
      <button data-index={idx} onClick={this.removeTask}>x</button> - {item}
    </li>
    );
    return (
      <ul>
        {this.props.items.map(showItems)}
      </ul>
    );
  }

});
