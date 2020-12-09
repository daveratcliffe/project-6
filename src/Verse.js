import { Component } from 'react';
import Compose from './Compose';
import Search from './Search';

class Verse extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: {
        word: "",
        numSyllables: "",
      },
    };
  }

  updateSearchQuery = ({ word, numSyllables }) => {
    this.setState({
      searchQuery: {
        word: word,
        numSyllables: numSyllables,
      },
    });
  };

  render(){
    return(
      <div className="verse">
        {/* Repeat search + haiku 3x (once for each line) */}

          {
            this.state.searchQuery.word
            ? <Compose 
            updateHaiku={this.props.updateHaiku}
            word={this.state.searchQuery.word}
            sylls={this.state.searchQuery.numSyllables}
            totalSylls={5}
            lineNumber={this.props.lineNumber}
            changeVerseVisible={this.props.changeVerseVisible}
            />
            : <Search updateSearchQuery={this.updateSearchQuery} />
          }
          {/* Strech goal: display haikus */}
      </div>
    )
  }
}

export default Verse;