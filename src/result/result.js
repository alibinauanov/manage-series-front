import { BsFillLightbulbOffFill } from "react-icons/bs";

export const Result = () => {
    const searchQuery = window.location.search;
    console.log(searchQuery, "hi");
    // split the searchQuery by commas 
    const splittedData = searchQuery.split(/[,?]+/).join(" ");
    console.log(splittedData);
    const filtereArray = [{
        title: splittedData
    }]
    return <div>{filtereArray.map((a) => <div>{a.title}</div>)}</div>
}