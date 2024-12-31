import { useEffect, useState } from "react"
import { usePlaylist } from "../context/Playlist"

export default function Player() {
    const playlist = usePlaylist()
    const [url, setUrl] = useState("")
    
    useEffect(() => {
        if (playlist.songList.length > 0) {
            playlist.songList[playlist.currentSongIndex].source.getBlobUrl().then((url: string) => setUrl(url))
        }
    }, [playlist.currentSongIndex])
    return (
        <>
            <audio src={url} controls></audio>
        </>
    )
}