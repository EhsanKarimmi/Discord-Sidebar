import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        //* Main structure.
        <div className="w-full h-screen bg-discord-gray-800">
            {/* Sidebar */}
            <Sidebar />
            {/* Content */}
            <div></div>
        </div>
    );
}

export default App;
