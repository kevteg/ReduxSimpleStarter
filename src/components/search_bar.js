import React, {Component} from 'react';
//Classes components have the ability to save and stores info
class SearchBar extends Component{
  constructor(props){
    super(props);
    //State is only on classes components
    this.state = {term : ''}
  }
  render() {
    //This has to return jsx
    //To see changed state
    //The idea is that the state is the one who changes the component
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.textChanged(event)} />
      </div>
    );
  }
  textChanged(event){
    this.setState({term: event.target.value});
    this.props.onTextChange(this.state.term);
  }
}
export default SearchBar;
