import { useState } from 'react';


export default function Contacts() {
    const mailTo = 'bob@bobrin.org';
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    return (
        <>
            <input type="text" onChange={e => setSubject(e.target.value)} />
            <textarea onChange={e => setBody(e.target.value)} />

            <button
                id="ochenunikalno"
                type="button"
                onClick={() => window.open(`mailto:${mailTo}?subject=${subject}?body=${body}`)}
            >
                send
            </button>
        </>
    );
}
