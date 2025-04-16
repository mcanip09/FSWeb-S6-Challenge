import { useState } from "react";
import { Character } from "./Character"

export const Characters = ({ charList }) => {


    return (
        <div style={{ display: "flex", flexDirection: "column",alignItems: "center",justifyContent: "center", gap: "1rem",padding: "20px" }}>
            {
                charList &&
                charList.map(item => <Character key={item.url} charObj={item} /> )
            }

        </div>
    )
}
