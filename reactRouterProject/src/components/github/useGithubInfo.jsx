import React from "react";
function useGithubInfo(userName) {
    const loadUserInfo = async () => {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        return data;
    };
    return { loadUserInfo };
}
export default useGithubInfo;