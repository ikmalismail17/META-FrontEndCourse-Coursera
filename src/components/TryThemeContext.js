import { useTheme } from "../hooks/ThemeContext";
import PropChildDiv from "./PropChildDiv";
import Switch from "./Switch";
import { useState } from "react";
import usePrevious from "../hooks/CustomHooks";

const Title = ({ children }) => {
    const { theme } = useTheme();
    return (
        <h2
        style={{
            color: theme === "light" ? "black" : "white",
        }}
        >
        {children}
        </h2>
    );
};

const Paragraph = ({ children }) => {
    const { theme } = useTheme();
    return (
        <p
        style={{
            color: theme === "light" ? "black" : "white",
        }}
        >
        {children}
        </p>
    );
};

const Content = () => {
    return (
        <div>
        <Paragraph>
            We are a pizza loving family. And for years, I searched and searched and
            searched for the perfect pizza dough recipe. I tried dozens, or more.
            And while some were good, none of them were that recipe that would
            make me stop trying all of the others.
        </Paragraph>
        </div>
    );
};
  
const Header = () => {
    return (
        <header>
        <Title>Little Lemon 🍕</Title>
        <Switch />
        </header>
    );
};
  
const Page = () => {
    return (
        <div className="Page">
        <Title>When it comes to dough</Title>
        <Content />
        </div>
    );
};

const TryThemeContext = () => {
    const { theme } = useTheme();
    const [day, setDay] = useState("Monday");
    const prevDay = usePrevious(day);
    const getNextDay = () => {
        if (day === "Monday") {
        setDay("Tuesday")
        } else if (day === "Tuesday") {
        setDay("Wednesday")
        } else if (day === "Wednesday") {
        setDay("Thursday")
        } else if (day === "Thursday") {
        setDay("Friday")
        } else if (day === "Friday") {
        setDay("Monday")
        }
    }

    return (
        <>
            <div
            className="App"
            style={{
                backgroundColor: theme === "light" ? "white" : "#282c34",
            }}
            >
            <Header />
            <Page />
            </div>
            <PropChildDiv>
            <p>Custom Hook using useEffect</p>
            <h1>
                Today is: {day}<br />
                {
                prevDay && (
                    <span>Previous work day was: {prevDay}</span>
                )
                }
            </h1>
            <button onClick={getNextDay}>
                Get next day
            </button>
            </PropChildDiv>
        </>
    );
};

export default TryThemeContext;