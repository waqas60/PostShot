import Link from "next/link";

export default function LaunchBadge() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xs">Trusted and featured on</h2>
      <Link
        href="https://fazier.com/launches/postshot-app.vercel.app"
        target="_blank"
      >
        <img
          src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=neutral"
          alt="Fazier badge"
        />
      </Link>
    </div>
  );
}
