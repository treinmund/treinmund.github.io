import { Download, Briefcase, GraduationCap, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const experience = [
  {
    role: "Research Fellow",
    org: "Oxford Centre for Technology and Development",
    period: "2025 – Present",
    description: null,
  },
  {
    role: "Responsible AI Researcher",
    org: "Responsible Technology Institute @ Oxford",
    period: "2021 – 2025",
    description: null,
  },
  {
    role: "Consultant / Senior Consultant",
    org: "Deloitte",
    period: "2016 – 2019",
    description: null,
  },
];

const education = [
  {
    degree: "DPhil in Computer Science",
    school: "University of Oxford",
    period: "2021 – 2025",
  },
  {
    degree: "MSc in Science, Technology, and Society",
    school: "University College London",
    period: "2020 – 2021",
  },
  {
    degree: "Masters of Business Administration",
    school: "University of Oxford",
    period: "2019 – 2020",
  },
    {
    degree: "B.S. in Biomedical Engineering",
    school: "Rensselaer Polytechnic Institute",
    period: "2012 – 2016",
  },
];

const publications = [
  "Green, C., Reinmund, T., Hamblin, K. and Sinha, S., 'The responsible use of AI in the provision of long-term care for older people: A care-centric approach', The Lancet Healthy Longevity, 2026.",
  "Reinmund, T., Kunze, L., and Jirotka, M., 'Sociotechnical Challenge Modeling: A Design Method for Responsible AI in Healthcare and Social Welfare', in Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, 2026.",
  "Reinmund, T., Kunze, L., and Jirotka, M., 'Transitioning Towards a Proactive Practice: A Longitudinal Field Study on the Implementation of a ML System in Adult Social Care', in Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems, 2024.",
  "Reinmund, T., Salvini, P., Kunze, L., Jirotka, M., and Winfield, A., 'Variable Autonomy Through Responsible Robotics: Design Guidelines and Research Agenda', ACM Transactions on Human-Robot Interaction, 2024."
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
              Tyler Reinmund
            </p>
          </div>
          <Button 
              asChild // This is important! It tells the button to behave like the child <a> tag
              variant="outline" 
              className="animate-fade-in-up delay-100 active:scale-[0.98] transition-transform"
            >
              <a 
                href="/Tyler Reinmund CV 2026.pdf" 
                download="Tyler Reinmund CV 2026.pdf"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
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
