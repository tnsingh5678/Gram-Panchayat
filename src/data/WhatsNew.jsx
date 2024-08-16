import { Link } from "react-router-dom";

export default function WhatsNew() {
    const data = [
        { key: "Annual Report 2023-24" },
        { key: "Annual Report 2022-23" }
    ];

    return (
        <div>

            <h1 className="text-4xl m-4">What's New</h1><br/>
            {data.map((e, index) => (
                <div key={index} className="text-left p-1">
                    <li>
                    <Link to={`/${e.key}`}>
                        {e.key}
                    </Link></li>
                    <br />
                </div>
            ))}
        </div>
    );
}
