import { Fragment, useState } from "react";
import randomcolor from "randomcolor";
import faker from "faker";

const Card = ({ data }) => {

    return (
        <ul className="d-flex d-tree-container flex-column">
            {data.map((item) => (
                <TreeNode node={item} />
            ))}
        </ul>
    );
};



const TreeNode = ({ node }) => {

    let bgColor, txcolor;

    if (node.status === "off Track") {
        bgColor = "rgba(232, 195, 127, 0.494)";
        txcolor = "orange";
    }
    else if (node.status === "on Track") {
        bgColor = "rgba(148, 252, 87, 0.494)";
        txcolor = "green";

    }
    else if (node.status === "At risk") {
        bgColor = "rgba(243, 101, 101, 0.494)";
        txcolor = "red";
    }
    const [childVisible, setchildVisible] = useState(false);
    const hasChild = node.children ? true : false;

    return (
        <li className="d-tree-node border-0">
            <div className="d-flex" onClick={e => setchildVisible(v => !v)}>
                {hasChild && (
                    <div className={`d-inline d-tree-toggler ${childVisible ?
                        "active" : ""}`}>

                    </div>
                )}

                <div className="container mainCard">
                    <div className="row cardHeader">
                        <p className="col-md-6">{node.name}</p>
                        <p className="col-md-6">{node.perCom}% complete</p>
                    </div>
                    <div className="row cardData">
                        <div className="col-md-6 salesDiv">
                            <p>Total sales-{node.totalsales} Crore</p>
                            <p>Target sales-{node.targetsales} Crore</p>
                        </div>
                        <p className="col-md-6 statusTrack" style={{ color: `${txcolor}`, background: `${bgColor}` }} >{node.status}</p>
                    </div>
                    <div className="row completestate"></div>
                </div>


            </div>


            {hasChild && childVisible &&
                <div className="d-tree-content">
                    <ul className="d-flex d-tree-container flex-column">
                        <Card data={node.children} />
                    </ul>
                </div>

            }
        </li>
    )
}

export default Card;