import React, { useState } from "react";

export default function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Ali",
            phoneNumber: "+905453535858",
        },
        {
            fullname: "Veli",
            phoneNumber: "+905452435458",
        },
        {
            fullname: "Nuster",
            phoneNumber: "+905533521821",
        },
    ]);

    return (
        <div>
            <h1>Contacts</h1>
        </div>
    );
}
