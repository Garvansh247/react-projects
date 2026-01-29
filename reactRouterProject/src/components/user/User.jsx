import React from "react";
import { useParams } from "react-router-dom";
function User() {
    const {userId}=useParams();
    return (
        <> 
            <div className="text-center text-3xl font-semibold mt-10 bg-yellow-200 p-4 rounded-md">
                Userid : {userId}
            </div>
        </>
    );
}
export default User;