import { useEffect, useState } from "react";
import { getGoogleAccessToken, setGoogleAccessToken } from "../libs/storage"
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import SongList from "./SongList";
import { DriveAudioSource, Song, getAudioFilesFromDrive } from "../libs/song";
import { usePlaylist } from "../context/Playlist";


export default function CloudLibrary() {
    const [token, setToken] = useState<string | null>(getGoogleAccessToken())

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            setGoogleAccessToken(tokenResponse.access_token)
            setToken(tokenResponse.access_token)
        },
    });

    const playlist = usePlaylist()

    useEffect(() => {
        if (token) {
            getAudioFilesFromDrive(token).then((files) => {
                const songs: Song[] = []
                for (const file of files) {
                    songs.push({
                        name: file.name,
                        source: new DriveAudioSource(file.id)
                    })
                }
    
                playlist.setSongList(songs)
            })
        }
    }, [token])

    return (
        <div>
            {token
                ? <SongList />
                : <button onClick={() => login()}>Login</button>
            }
        </div>
    )
}