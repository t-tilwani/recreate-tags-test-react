import React from "react";
import { useNavigate } from "react-router-dom";
export default function ErrorFallback() {
    const navigate = useNavigate();

    return(
        <div>
            <p>Error: 404 not found</p>
            <button onClick={() => navigate('/tags')} >
                BackToHome
            </button>
        </div>
    )
}