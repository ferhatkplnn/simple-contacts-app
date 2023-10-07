import { useState } from "react";
import Form from "./Form";

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
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    );
}
