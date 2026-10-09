import Image from 'next/image';
import { Download, Mail } from 'lucide-react';
import { data, projects } from '@/lib/data';
import ProjectCard from '@/components/project-card';

export default function Home() {
  const { profile, contact } = data;

  return (
    <main id="main">
      <section className="classic-section border-b border-line bg-white">
        <div className="classic-container grid items-center gap-10 py-14 md:grid-cols-[220px_1fr] md:py-20">
          <div className="profile-photo-slot">
            {profile.photo ? (
              <Image src={profile.photo} alt={`${profile.name} profile photo`} width={440} height={520} priority className="h-full w-full object-cover" />
            ) : (
              <div className="profile-photo-placeholder" aria-label="Profile photo placeholder">
                <div className="profile-avatar" aria-hidden="true"><span /><strong /></div>
                <p>Profile photo</p>
                <small>Add the image path in portfolio.json</small>
              </div>
            )}
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.14em] text-muted">{profile.role}</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl">{profile.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-forest">{profile.intro}</p>
            <p className="mt-4 text-sm text-muted">{profile.location}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="classic-button classic-button-primary" href="#work">View my work</a>
              <a className="classic-button" href={`mailto:${contact.email}`}><Mail size={16} /> Contact me</a>
              <a className="classic-button" href={profile.cvUrl} download><Download size={16} /> {profile.cvLabel}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="classic-section bg-[#f6f6f6]">
        <div className="classic-container py-16 md:py-20">
          <div className="classic-heading"><p>Portfolio</p><h2>Selected work</h2><span>A selection of recent design and development projects.</span></div>
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section id="about" className="classic-section border-y border-line bg-white">
        <div className="classic-container grid gap-12 py-16 md:grid-cols-[1fr_1.4fr] md:py-20">
          <div><div className="classic-heading text-left"><p>About</p><h2>About my ideals</h2></div></div>
          <div>
            <p className="text-lg leading-8 text-forest">{profile.about}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="classic-info-box"><h3>Availability</h3><p>{profile.availability}</p></div>
              <div className="classic-info-box"><h3>Location</h3><p>{profile.location}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="classic-section bg-[#f6f6f6]">
        <div className="classic-container py-16 md:py-20">
          <div className="classic-heading"><p>Background</p><h2>Experience and skills</h2></div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="classic-panel">
              <h3 className="classic-panel-title">Experience</h3>
              {data.experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="classic-list-item">
                  <div><h4>{item.role}</h4><p className="text-sm text-muted">{item.company} · {item.location}</p><p className="mt-2 text-sm leading-6 text-forest">{item.description}</p></div>
                  <span>{item.start} – {item.end}</span>
                </article>
              ))}
              <h3 className="classic-panel-title mt-9">Education</h3>
              {data.education.map((item) => (
                <article key={item.degree} className="classic-list-item">
                  <div><h4>{item.degree}</h4><p className="text-sm text-muted">{item.institution} · {item.location}</p><p className="mt-2 text-sm leading-6 text-forest">{item.description}</p></div>
                  <span>{item.start} – {item.end}</span>
                </article>
              ))}
            </div>
            <aside className="classic-panel">
              <h3 className="classic-panel-title">Skills</h3>
              <div className="space-y-7">
                {data.skills.map((group) => (
                  <div key={group.group}><h4 className="mb-3 font-bold">{group.group}</h4><div className="flex flex-wrap gap-2">{group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div></div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="contact" className="classic-section border-t border-line bg-white">
        <div className="classic-container py-16 text-center md:py-20">
          <div className="classic-heading"><p>Contact</p><h2>{contact.heading}</h2><span className="mx-auto block max-w-xl">{contact.message}</span></div>
          <a className="classic-button classic-button-primary mt-8" href={`mailto:${contact.email}`}><Mail size={16} /> {contact.email}</a>
        </div>
      </section>
    </main>
  );
}
