import { data } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="classic-footer">
      <div className="classic-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2>{data.profile.name}</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            {data.profile.role}
          </p>
          <p className="mt-2 text-sm text-white/70">{data.profile.location}</p>
        </div>
        <div>
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="/#work">Work</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Connect</h3>
          <ul>
            {data.socialAccounts.map((account) => (
              <li key={account.label}>
                <a href={account.url} target="_blank" rel="noopener noreferrer">
                  {account.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <a
            className="break-all text-sm text-white/75 hover:text-white"
            href={`mailto:${data.contact.email}`}
          >
            {data.contact.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="classic-container flex flex-col justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {data.profile.name}. All rights
            reserved.
          </span>
          {/* <a href="#top" className="hover:text-white">
            Back to top ↑
          </a> */}
        </div>
      </div>
    </footer>
  );
}
