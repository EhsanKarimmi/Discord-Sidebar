import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        //* Main structure.
        <div className="w-full h-screen flex items-center justify-center bg-discord-gray-800">
            {/* Sidebar */}

            <Sidebar />

            {/* Content */}
            <div className="text-4xl opacity-50 ">✌😃</div>
        </div>
    );
}

export default App;
