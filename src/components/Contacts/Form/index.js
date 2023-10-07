import { useState } from "react";

const initialFormValues = { fullname: "", phoneNumber: "" };

export default function Form({ addContacts, contacts }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phoneNumber === "") {
            return false;
        }

        addContacts([...contacts, form]);

        setForm(initialFormValues);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="fullname"
                    placeholder="Full Name"
                    value={form.fullname}
                    onChange={onChangeInput}
                />
            </div>

            <div>
                <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={form.phoneNumber}
                    onChange={onChangeInput}
                />
            </div>

            <div>
                <button>Add</button>
            </div>
        </form>
    );
}
