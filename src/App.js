import React, { Component } from 'react';
import List from './components/List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    console.log(store)
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;


// function App(STORE) {
//   return (
//     <main className='App'>
//       <header className='App-header'>
//         <h1>Trelloyes!</h1>
//       </header>
//       <div className='App-List'>
//         <ListComponent />
//       </div>
//     </main>
//   );
// }

