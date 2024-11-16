import { Link } from "expo-router";

const linkClasses = "underline decoration-2 text-sky-500";

export default function index() {
  return (
    <>
      <Link className={linkClasses} href="/legend-state">
        Test Legend-State (with Supabase)
      </Link>
      <Link className={linkClasses} href="/mapbox">
        Test Mapbox
      </Link>
    </>
  );
}
