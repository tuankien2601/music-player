import { Song } from "../libs/song"
import { usePlaylist } from "../context/Playlist"

export default function SongList() {
    const playlist = usePlaylist()
    return (
        <ul className="menu bg-base-200 rounded-box w-56">
            { 
                playlist.songList.map((song: Song, index: number) => {
                    return <li><a onClick={() => playlist.setCurrentSong(index)}>{song.name}</a></li>
                })
            }
        </ul>
    )
}