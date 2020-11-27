import React from "react";
import {Link} from "react-router-dom";

function Upload() {
    return (
        <div className="Upload">
            <Link to={`/`}>Home</Link>
            <p>Upload</p>
        </div>
    );
}

export default Upload;
