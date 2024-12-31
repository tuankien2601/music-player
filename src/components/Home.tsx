import LocalLibrary from './LocalLibrary'
import { HiMenu } from "react-icons/hi";
import CloudLibrary from './CloudLibrary';
import { PlaylistProvider } from '../context/Playlist';
import Player from './Player';


export default function Home() {


    return (
        <div className="drawer lg:drawer-open">
            <input id="drawer-toggle-btn" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <div className="navbar bg-base-300 w-full">
                    <label htmlFor="drawer-toggle-btn" className="btn drawer-button lg:hidden">
                        <HiMenu />
                    </label>
                </div>
                <PlaylistProvider>
                    <CloudLibrary />
                    <Player/>
                </PlaylistProvider>

            </div>
            <div className="drawer-side">
                <label htmlFor="drawer-toggle-btn" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a>Songs</a></li>
                    <li><a>Cloud</a></li>
                </ul>
            </div>
        </div>
    )
}