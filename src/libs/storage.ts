export function getGoogleAccessToken() {
    return localStorage.getItem("google_access_token")
}

export function setGoogleAccessToken(token: string|null) {
    if (token) localStorage.setItem("google_access_token", token)
    else localStorage.removeItem("google_access_token")
}