'use client'; // Error components must be Client components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Lo siento, ha ocurrido un error... </h2>
            <button onClick={() => reset()}>Volver a cargar</button>
        </div>
    );
}
