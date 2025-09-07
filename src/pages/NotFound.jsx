import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold">404 Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="text-blue-600 underline">Go home</Link>
    </section>
  );
}
