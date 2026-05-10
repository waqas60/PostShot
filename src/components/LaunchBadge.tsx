import Link from "next/link";

export default function LaunchBadge() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xs">Trusted and featured on</h2>
      <div className="flex gap-5 items-center">
        <Link
          href="https://fazier.com/launches/postshot-app.vercel.app"
          target="_blank"
        >
          <img
            src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=neutral"
            alt="Fazier badge"
          />
        </Link>
        <Link
          href="https://www.scrolllaunch.com/products/postshot?utm_source=badge&utm_medium=embed&utm_campaign=postshot&ref=scrolllaunch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.scrolllaunch.com/api/badge/postshot"
            alt="Featured on ScrollLaunch"
            width="220"
            height="48"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
}
