import { Song } from "../libs/song"
import { usePlaylist } from "../context/Playlist"

export default function SongList() {
    const playlist = usePlaylist()
    return (
        <ul>
            { 
                playlist.songList.map((song: Song, index: number) => {
                    return <li onClick={() => playlist.setCurrentSong(index)}>{song.name}</li>
                })
            }
        </ul>
    )
}