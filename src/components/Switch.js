import React from "react";
import "../assets/styles/switch.css"
import { useTheme } from "../hooks/ThemeContext";

const Switch = () => {
    const { theme, toggleTheme } = useTheme();

    const handleChangeTheme = () => {
        toggleTheme();
    };

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={theme === "light"}
                onChange={handleChangeTheme}
            />
            <span className="slider round" />
        </label>
    );
};

export default Switch;