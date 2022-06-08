import { discordLinks } from "./Links";

function Sidebar() {
    return (
        //* Main structure.
        <div className="bg-discord-gray-900 h-screen w-24 fixed shadow-lg flex items-start justify-center ">
            {/* Links icon */}

            <ul className="space-y-8">
                {discordLinks.map((link, linkIndex) => {
                    return (
                        <li
                            key={linkIndex}
                            className="text-gray-100 text-3xl p-4 my-5 rounded-[2rem] hover:rounded-2xl bg-discord-gray-600 first:hover:bg-discord-blue hover:bg-green-700 transition-all ease-linear duration-200 cursor-pointer "
                        >
                            {link.icon}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Sidebar;
