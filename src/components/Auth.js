import React from "react";
import Logo from "./Logo";

const b64 = 'MTIwODIwMjM=';

const Auth = ({event}) => {
    isAuth(event);
    return (
        <div className="app personal-code-wrapper">
            <div className="personal-code-bg" />
            <div className="personal-code text-center" id="code-wrapper">
                <Logo />
                <sub>Please enter the code found on the invite to be able to access the site.</sub>
                <input
                    type="text"
                    id="invite-code"
                    className="input"
                    placeholder="Invite code"
                    required
                    onChange={evt => updateInputValue(evt, event)}
                />
            </div>
        </div>
    );
}

function isAuth(auth) {
    const bkAuth = localStorage.getItem('bk_auth');
    if (bkAuth === b64) auth(true)
}

function updateInputValue(evt, auth) {
    const { value } = evt.target;
    if (btoa(value) === b64) {
        localStorage.setItem('bk_auth', btoa(value));
        auth(true)
    }
}

export default Auth;
