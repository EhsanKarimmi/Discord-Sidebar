import { discordLinks } from "./Links";

function Sidebar() {
    return (
        //* Main structure.
        <div className="bg-discord-gray-900 h-screen w-24 fixed top-0 left-0 shadow-lg flex items-start justify-center rounded-r-lg ">
            {/* Links icon */}

            <ul className="space-y-8 ">
                {discordLinks.map((link, linkIndex) => {
                    return (
                        <li
                            key={linkIndex}
                            className="text-gray-100 group text-3xl p-4 my-5 rounded-[2rem] hover:rounded-2xl bg-discord-gray-600 first:hover:bg-discord-blue hover:bg-green-700 transition-all ease-linear duration-200 cursor-pointer "
                        >
                            {link.icon}

                            <span className="absolute text-base font-medium bg-discord-gray-900 whitespace-nowrap py-1 px-2 rounded-md ml-[4.5rem] my-[-1.8rem] scale-0 group-hover:scale-100 transition-all ease-linear duration-100">
                                {link.name}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Sidebar;
