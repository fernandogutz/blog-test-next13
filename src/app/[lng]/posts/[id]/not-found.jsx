import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h2>OOPS, la página solicitada no existe.</h2>
            <Link href={'/'}>Volver al inicio</Link>
        </>
    );
}