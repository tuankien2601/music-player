import { useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { gapi } from "gapi-script";
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";


export default function Home() {
    const clientId = import.meta.env.VITE_CLIENT_ID
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="drawer">
                <input id="drawer-toggle-btn" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-300 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="drawer-toggle-btn" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <HiMenu size={"48px"} />
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2">Navbar Title</div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    Content
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-toggle-btn" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 min-h-full w-80 p-4">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}