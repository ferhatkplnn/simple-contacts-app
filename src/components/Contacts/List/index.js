import React, { useState } from "react";

export default function List({ contacts }) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase());
        });
    });

    return (
        <div>
            <input
                placeholder="Filter contact"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />

            <ul className="list">
                {filtered.map((contact, i) => {
                    return (
                        <li key={i}>
                            <span>{contact.fullname}</span>
                            <span>{contact.phoneNumber}</span>
                        </li>
                    );
                })}
            </ul>

            <p>
                <b>Total contacts:</b> {filtered.length}
            </p>
        </div>
    );
}
