import { Download, Briefcase, GraduationCap, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const experience = [
  {
    role: "Assistant Professor, Computer Science",
    org: "University of Nordic Studies",
    period: "2021 – Present",
    description: "Teaching HCI and AI Ethics courses. Leading the Responsible AI Lab with 4 PhD students.",
  },
  {
    role: "Research Scientist",
    org: "Civic AI Institute",
    period: "2018 – 2021",
    description: "Developed fairness-aware ML pipelines for public health applications. Published 8 peer-reviewed papers.",
  },
  {
    role: "UX Research Intern",
    org: "DesignLab Inc.",
    period: "Summer 2017",
    description: "Conducted usability studies and contributed to the redesign of an enterprise analytics dashboard.",
  },
];

const education = [
  {
    degree: "Ph.D. in Human-Computer Interaction",
    school: "MIT Media Lab",
    period: "2014 – 2018",
  },
  {
    degree: "M.S. in Computer Science",
    school: "Stanford University",
    period: "2012 – 2014",
  },
  {
    degree: "B.S. in Information Science",
    school: "University of Michigan",
    period: "2008 – 2012",
  },
];

const skills = [
  "Python", "R", "TypeScript", "React", "Machine Learning",
  "User Research", "Qualitative Analysis", "Data Visualization",
  "Experiment Design", "Technical Writing",
];

const publications = [
  "Morgan, A. et al. (2023). 'Fairness Metrics in Clinical ML: A Comparative Study.' ACM CHI.",
  "Morgan, A. & Lee, J. (2022). 'Explaining AI to Non-Experts: A Visual Approach.' IEEE VIS.",
  "Morgan, A. (2021). 'Participatory Data Dashboards for Urban Planning.' CSCW.",
];

const Resume = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="animate-fade-in-up font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Curriculum Vitae
            </h1>
            <p className="animate-fade-in-up delay-100 mt-2 text-lg text-muted-foreground">
              Dr. Alex Morgan
            </p>
          </div>
          <Button variant="outline" className="animate-fade-in-up delay-100 active:scale-[0.98] transition-transform">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <Separator className="my-10" />

        {/* Experience */}
        <div className="animate-fade-in-up delay-200">
          <div className="flex items-center gap-2 text-foreground">
            <Briefcase className="h-5 w-5" />
            <h2 className="font-display text-2xl font-semibold">Experience</h2>
          </div>
          <div className="mt-6 space-y-8 border-l-2 border-border pl-6">
            {experience.map((item) => (
              <div key={item.role} className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-foreground bg-background" />
                <h3 className="font-sans text-base font-semibold text-foreground">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.org} · {item.period}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        {/* Education */}
        <div className="animate-fade-in-up delay-300">
          <div className="flex items-center gap-2 text-foreground">
            <GraduationCap className="h-5 w-5" />
            <h2 className="font-display text-2xl font-semibold">Education</h2>
          </div>
          <div className="mt-6 space-y-6 border-l-2 border-border pl-6">
            {education.map((item) => (
              <div key={item.degree} className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-foreground bg-background" />
                <h3 className="font-sans text-base font-semibold text-foreground">{item.degree}</h3>
                <p className="text-sm text-muted-foreground">{item.school} · {item.period}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        {/* Skills */}
        <div className="animate-fade-in-up delay-400">
          <div className="flex items-center gap-2 text-foreground">
            <Wrench className="h-5 w-5" />
            <h2 className="font-display text-2xl font-semibold">Skills</h2>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        {/* Publications */}
        <div className="animate-fade-in-up delay-500">
          <div className="flex items-center gap-2 text-foreground">
            <BookOpen className="h-5 w-5" />
            <h2 className="font-display text-2xl font-semibold">Selected Publications</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {publications.map((pub) => (
              <li key={pub} className="text-sm leading-relaxed text-muted-foreground">{pub}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
