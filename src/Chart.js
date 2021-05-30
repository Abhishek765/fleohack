import Card from "./Card";
import data from "./data.json";


const Chart = () => {
    return (
        <div className="org-tree">
            <Card data={data} />
        </div>
    );
};

export default Chart;