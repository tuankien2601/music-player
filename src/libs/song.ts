import { useGAuth } from "../context/GDriveAuthContext";

export async function getAudioFilesFromDrive(accessToken: string) {
    var audioFiles = []
    try {
        const response = await fetch('https://www.googleapis.com/drive/v3/files', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        for (const file of data.files) {
            if (file.mimeType.includes("audio")) {
                audioFiles.push(file)
            }
        }
    } catch (error) {
        console.error('Error fetching files:', error);
    }

    return audioFiles;
}

export async function getAudioFile(token: string, id: string) {
    const response = await fetch(`https://www.googleapis.com/drive/v3/files/${id}?alt=media`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch audio: ${response.statusText}`);
    }

    const content = await response.blob()
    return content;
}

export interface AudioSource {
    getBlobUrl(): Promise<string>;
}

export class LocalAudioSource implements AudioSource {
    constructor(file: File) {

    }
    async getBlobUrl(): Promise<string> {
        return "";
    }
}

export class DriveAudioSource implements AudioSource {
    id = ""
    constructor(id: string) {

    }
    async getBlobUrl(): Promise<string> {
        const { token } = useGAuth()

        if (!token) throw new Error("Invalid token");

        const blob = await getAudioFile(token, this.id);
        return URL.createObjectURL(blob);
    }
}

export interface Song {
    name: string,
    source: AudioSource
}