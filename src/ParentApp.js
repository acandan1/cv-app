import React, { Component } from "react";
import DisplayApplication from "./DisplayApplication";
import Application from "./Application";

export default class ParentApp extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          map: new Map(),
        }

        this.changeMap = this.changeMap.bind(this);
      }
    
      changeMap(key, val) {
        this.setState( { map: this.state.map.set(key, val) });
      }
    

    render() {
        return (
            <div id="root2">
                <Application changeMap = { this.changeMap }/>
                <DisplayApplication map = { this.state.map }/>
            </div>
        )
    }
}