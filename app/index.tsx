import { Link } from "expo-router";

export default function index() {
  return (
    <>
      <Link href="/legend-state">Test Legend-State (with Supabase)</Link>
      <Link href="/mapbox">Test Mapbox</Link>
    </>
  );
}
