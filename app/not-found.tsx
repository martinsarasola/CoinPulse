import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-3xl font-bold mb-4">404 - Página no encontrada</h1>
      <Link href="/" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
