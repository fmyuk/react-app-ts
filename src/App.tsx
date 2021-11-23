import React from 'react';
import { Provider } from "react-redux";

import './App.css';
import { buildTodoStore } from './redux/store';
import TodoContainer from "./components/TodoContainer";

class App extends React.Component {
  public render() {
    return (
      <Provider store={buildTodoStore()}>
        <TodoContainer />
      </Provider>
    );
  }
};

export default App;
