import React from "react";
import Navbar from "../components/navbar";

class Homepage extends React.Component{
    render(){
        return <div id="App" className="w-full min-h-screen">
            <Navbar></Navbar>
        </div>
    }
}
export default Homepage;