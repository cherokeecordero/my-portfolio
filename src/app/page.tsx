import Image from "next/image";
import { Navbar } from "@/components/site/navbar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

type SidebarSectionProps = {
  title: string;
  children: React.ReactNode;
};

function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <section className="mb-6">
      <div className="flex items-center gap-4 mb-3">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-background/80">
          {title}
        </h4>
        <div className="h-px bg-background/20 flex-1" />
      </div>
      <div className="space-y-2 text-sm">
        {children}
      </div>
    </section>
  );
}

type ExperienceItemProps = {
  start: string;
  end: string;
  role: string;
  company: string;
  bullets: string[];
};

function ExperienceItem({ start, end, role, company, bullets }: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-[72px_1fr] gap-4">
      <div className="text-xs uppercase tracking-wide text-muted-foreground flex flex-col items-center">
        <span>{start}</span>
        <span className="my-1">-</span>
        <span>{end}</span>
      </div>
      <div>
        <h3 className="font-semibold text-lg leading-snug">
          {role} <span className="font-normal text-muted-foreground">- {company}</span>
        </h3>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
          {bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section id="home" className="border-b">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Cherokee Cordero</h1>
            <p className="text-muted-foreground text-lg">Sales Executive • E‑commerce Co‑Owner • Virtual Assistant</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge>Sales & Client Relations</Badge>
              <Badge>Lead Generation</Badge>
              <Badge>E‑commerce Ops</Badge>
              <Badge>Content & Ads</Badge>
            </div>
            <div className="pt-4 flex gap-3">
              <a href="#contact" className={buttonVariants()}>Get in touch</a>
              <a href="#experience" className={buttonVariants({ variant: "outline" })}>View experience</a>
            </div>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <div className="size-40 md:size-56 rounded-full border overflow-hidden">
              <Image src={`${basePath}/2x2%20Cherokee.png`} alt="Portrait of Cherokee Cordero" width={224} height={224} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-14">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold tracking-tight">About</h2>
            </div>
            <div className="md:col-span-2 text-muted-foreground">
              <p>
                I build relationships, streamline e‑commerce operations, and drive measurable results. My background spans 4+ years in automotive sales, co‑running a TikTok shop, and hands‑on lead generation. I enjoy solving real business problems with organized systems and clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience + Sidebar */}
      <section id="experience" className="border-b">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-6 md:p-10">
          {/* Sidebar */}
          <aside className="bg-foreground text-background md:rounded-md overflow-hidden md:sticky md:top-16 h-fit p-6">
            <SidebarSection title="Contact">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="size-4 mt-0.5 text-background/70" />
                  <span>+63 923 142 6605</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="size-4 mt-0.5 text-background/70" />
                  <a href="mailto:cherokeecordero@gmail.com" className="underline">cherokeecordero@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="size-4 mt-0.5 text-background/70" />
                  <span>Town and Country, Abangan Norte Marilao Bulacan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="size-4 mt-0.5 text-background/70" />
                  <a href="https://linkedin.com/in/cherokee-marron-cordero-b3899b301" target="_blank" rel="noreferrer" className="underline">LinkedIn Profile</a>
                </li>
              </ul>
            </SidebarSection>

            <SidebarSection title="Education">
              <div className="space-y-1">
                <div className="font-semibold">Bachelor of Science in Information Technology</div>
                <div className="text-background/80">Pambayang Dalubhasaan ng Marilao</div>
                <div className="text-background/80">2013 - 2017</div>
              </div>
            </SidebarSection>

            <SidebarSection title="Skills">
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Web & E-Commerce:</span> WordPress, Shopify
                </li>
                <li>
                  <span className="font-semibold">Design Tools:</span> Canva, Adobe Photoshop
                </li>
                <li>
                  <span className="font-semibold">Lead Generation & CRM:</span> Apollo.io, Google Sheets, Instagram, LinkedIn
                </li>
                <li>
                  <span className="font-semibold">Social Media & Ads:</span> TikTok, Facebook, Instagram
                </li>
              </ul>
            </SidebarSection>

            <SidebarSection title="Language">
              <ul className="space-y-1">
                <li>
                  <span className="font-semibold">Filipino</span> - Native
                </li>
                <li>
                  <span className="font-semibold">English</span> - Conversational
                </li>
              </ul>
            </SidebarSection>
          </aside>

          {/* Main content */}
          <main className="bg-card md:rounded-md p-6 md:p-8 space-y-6 border">
            <header className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold">Professional Experience</h2>
            </header>

            <div className="space-y-8">
              <ExperienceItem
                start="Oct 2019"
                end="Apr 2024"
                role="Sales Executive"
                company="Laus Group of Companies"
                bullets={[
                  "Developed and maintained strong relationships with new and existing clients to drive repeat business and referrals.",
                  "Managed client inquiries via phone, email, and messaging platforms, providing timely and accurate responses demonstrating strong communication and customer service skills",
                  "Prepared and sent quotations, financing options, and vehicle information via digital platforms, ensuring attention to detail and professionalism in written communication",
                  "Successfully closed sales by negotiating pricing, trade-ins, and financing options, contributing to consistent achievement of monthly sales targets",
                ]}
              />

              <ExperienceItem
                start="Jan 2024"
                end="Present"
                role="Co-Owner | HC Collections"
                company="TikTok Shop"
                bullets={[
                  "Manage daily e-commerce operations, including product uploads, pricing, stock monitoring, and order fulfillment.",
                  "Conducted live selling sessions, increasing product visibility and sales conversions.",
                  "Created engaging product content and ran advertising campaigns to boost reach and profitability.",
                  "Responded to customer inquiries promptly to maintain high satisfaction ratings.",
                  "Researched and selected trending and profitable products based on market demand, pricing trends, and competitor analysis to maximize ROI",
                ]}
              />

              <ExperienceItem
                start="Jun 2025"
                end="Aug 2025"
                role="Lead Generation – Virtual Assistant"
                company="Allure Creatives | Bootcamp Graduate + Client Projects"
                bullets={[
                  "Researched and identified qualified leads via Apollo.io, LinkedIn, and Instagram based on client’s target criteria.",
                  "Applied filtering methods to ensure quality leads aligned with business objectives.",
                  "Maintained organized and updated lead lists using Google Sheets, ensuring accuracy for management review.",
                  "Crafted and sent personalized outreach messages to initiate conversations.",
                  "Scheduled and confirmed qualified appointments for the sales team.",
                ]}
              />
            </div>
          </main>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Let’s collaborate</h2>
          <p className="text-muted-foreground mb-6">Open to sales, e‑commerce, and lead generation roles and projects.</p>
          <div className="space-x-2">
            <a href="mailto:cherokeecordero@gmail.com" className={buttonVariants()}>Email me</a>
            <a href="https://linkedin.com/in/cherokee-marron-cordero-b3899b301" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline" })}>LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
