//ONE COMPONENT PER FILE
import React, {Component} from 'react';
//This is what puts it in the dom
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBJCW05AxjegIs66_YsJnxnQsKQYuqzFLE'
//new Component > new html
//Const: ES6 sintax, declaring a variable
//Const: constant, not changing

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { videos: [],
                   selectedVideo: null,
                   query: 'steven universe'};
    YTSearch({key: API_KEY, term: this.state.query}, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0]});
    });
  }
  newSearch(query){
    this.setState({query})
    YTSearch({key: API_KEY, term: this.state.query}, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0]});
    });
  }
  render(){
    return (
      <div>
        <SearchBar onTextChange={query => this.newSearch(query)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
      </div>
    );
  }
}

//it nothings is inside: <App />
//Put this generated html and put it in the page (page > DOM)
//This creates an instance of App:<App />

ReactDOM.render(<App />, document.querySelector('.container'));
