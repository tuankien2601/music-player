import { useState } from "react"

function SongList({ songs }: { songs: FileList | null }) {
    return (
        <ul className="menu bg-base-200 w-56">
            {
                songs ? Array(songs.length).fill(null).map((value, index) => (
                    <li><a>{songs[index].name}</a></li>
                )) : null
            }
        </ul>
    )
}

export default function LocalLibrary() {
    const [songList, setSongList] = useState<FileList | null>(null)
    return (
        <div>
            <input type="file" multiple={true} className="file-input w-full max-w-xs" onChange={(event) => setSongList(event.target.files)} />
            <SongList songs={songList}/>
        </div>
    )
}