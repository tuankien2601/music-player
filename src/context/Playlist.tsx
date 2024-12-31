import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from 'react';
import { Song } from '../libs/song';


interface Playlist {
    currentSongIndex: number,
    songList: Song[],
    setCurrentSong: (index: number) => void,
    setSongList: (list: Song[]) => void
}

const PlaylistContext = createContext<Playlist>({} as Playlist);

export const PlaylistProvider = ({ children }: { children: ReactNode }) => {
    const [song, setSong] = useState(0);
    const [songList, setSongList] = useState<Song[]>([]);

    const value = {
        currentSongIndex: song,
        songList: songList,
        setCurrentSong: setSong,
        setSongList: setSongList
    }

    return (
        <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>
    );
};

export const usePlaylist = () => useContext(PlaylistContext);
