import React, {Component} from 'react';
import './App.css';
import HomePage from './HomePage'
import  PersonalPage from './PersonalPage'
import ScriptList from './ScriptList'
import CreateScript from './createScript'
class App extends Component {
    render() {
        return (
            <PersonalPage/>
            // <ScriptList/>
            // <CreateScript/>
            // <CodeEditor/>
        );
    }
}

export default App;
