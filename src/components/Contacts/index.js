import { useState } from "react";

import "./styles.css";

import Form from "./Form";
import List from "./List";

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
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    );
}
