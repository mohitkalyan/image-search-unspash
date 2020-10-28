import React from "react";
import Input from "./Inputform";



class App extends React.Component{
    onSearchSubmit(term){
        console.log(term)
    }
    render(){
        return(
        <Input onSubmit={this.onSearchSubmit}/>
    )}
}

export default App;

