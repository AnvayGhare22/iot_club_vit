import { SectionReveal } from "@/components/ui/SectionReveal";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | IoT Club VIT Pune",
  description: "Meet the minds behind the IoT Club at VIT Pune.",
};

// Name → photo path mapping
const photoMap: Record<string, string> = {
  "Hamd Ansari": "/images/team/hamd-ansari.jpeg",
  "Harshvardhan Patil": "/images/team/harshvardhan-patil.jpg",
  "Deepraj Patil": "/images/team/deepraj-patil.jpg",
  "Suraj Yadav": "/images/team/suraj-yadav.jpg",
  "Samruddhi Kabade": "/images/team/samruddhi-kabade.png",
  "Lokesh Purohit": "/images/team/lokesh-purohit.jpeg",
  "Divita Rao": "/images/team/divita-rao.png",
  "Vihaan Dhanapune": "/images/team/vihaan-dhanapune.jpeg",
  "Mayank Patil": "/images/team/mayank-patil-new.jpg",
  "Vanshika Dekate": "/images/team/vanshika-dekate.jpg",
  "Yash Patil": "/images/team/yash-patil.jpg",
  "Sumit Rajput": "/images/team/sumit-rajput.jpeg",
  "Chaitanya Pilane": "/images/team/chaitanya-pilane-new.jpg",
  "Onkar Ekatpure": "/images/team/onkar-ekatpure.jpeg",
  "Anvay Ghare": "/images/team/anvay-ghare.png",
  "Vivek Pate": "/images/team/vivek-pate.jpg",
  "Bhakti Nemane": "/images/team/bhakti-nemane-new.png",
  "Ayush Gavali": "/images/team/ayush-gavali.jpeg",
  "Raj Algat": "/images/team/raj-algat.jpg",
  "Ojas Hirolikar": "/images/team/ojas-hirolikar.jpeg",
  "Pranit Dhanade": "/images/team/pranit-dhanade.jpg",
  "Dhruv Agarwal": "/images/team/dhruv-agarwal-new.jpeg",
  "Shivam Gaikwad": "/images/team/shivam-gaikwad.jpg",
  "Dikshant Patil": "/images/team/dikshant-patil.jpeg",
  "Tarun Sayal": "/images/team/tarun-sayal.jpeg",
  "Ishika Pujari": "/images/team/ishika-pujari-new.jpg",
  "Yadnesh Gunjal Patil": "/images/team/yadnesh-gunjal-patil-new.jpg",
  "Anant Bardia": "/images/team/anant-bardia.jpg",
  "Parth Gurav": "/images/team/parth-gurav.jpg",
  "Aditya Patil": "/images/team/aditya-patil.jpg",
  "Kajal Sharma": "/images/team/kajal-sharma.png",
  "Srujit Yennam": "/images/team/srujit-yennam.jpg",
  "Atharva Jaiswal": "/images/team/atharva-jaiswal.jpg",
  "Aditya Mamarde": "/images/team/aditya-mamarde-new.png",
  "Piyush Dnyaneshwar Suryawanshi": "/images/team/piyush-suryawanshi.jpeg",
  "Aryan Anand Gham": "/images/team/aryan-gham.jpg",
  "Ayush Shete": "/images/team/ayush-shete-new.png",
  "Taha Syed": "/images/team/taha-syed.jpg",
  "Onkar Adinath Ekatpure": "/images/team/onkar-ekatpure.jpeg",
  "Sarthak Shrikant Bagul": "/images/team/sarthak-bagul.jpg",
  "Piyush Balaji Dahatonde": "/images/team/piyush-dahatonde-new.png",
  "Sarthak Pardeshi": "/images/team/sarthak-pardeshi.png",
  "Vanshika Vivek Dekate": "/images/team/vanshika-dekate.jpg",
  "Omkar Sharad Zadbuke": "/images/team/omkar-zadbuke.jpg",
  "Suyash Satish Jadhav": "/images/team/suyash-jadhav.jpg",
  "Kapil Prashant Savargaonkar": "/images/team/kapil-savargaonkar.jpg",
  "M. Tahmid F. Shaikh": "/images/team/tahmid-shaikh.png",
  "Shelke Om Sandip": "/images/team/om-shelke.jpg",
  "Tanavi Donewar": "/images/team/tanavi-donewar.png",
};

const coreCommittee = [
  { name: "Hamd Ansari", role: "Chairperson" },
  { name: "Harshvardhan Patil", role: "Secretary" },
  { name: "Deepraj Patil", role: "Treasurer" },
  { name: "Suraj Yadav", role: "Event Coordinator" },
  { name: "Samruddhi Kabade", role: "PRO" },
];

const domainHeads = [
  { name: "Lokesh Purohit", role: "Finance Head" },
  { name: "Divita Rao", role: "Event Execution Head" },
  { name: "Vihaan Dhanapune", role: "Publicity Head" },
  { name: "Mayank Patil", role: "Activity Head" },
  { name: "Vanshika Dekate", role: "Documentation Head" },
  { name: "Yash Patil", role: "Technical Head" },
  { name: "Sumit Rajput", role: "Social Media Head" },
  { name: "Chaitanya Pilane", role: "Design Head" },
  { name: "Onkar Ekatpure", role: "Project Head" },
];

const teams = [
  {
    name: "Technical Team",
    members: [
      { name: "Anvay Ghare", role: "Joint Head" },
      { name: "Vivek Pate", role: "Member" },
      { name: "Bhakti Nemane", role: "Member" },
      { name: "Ayush Gavali", role: "Member" },
      { name: "Raj Algat", role: "Member" },
      { name: "Ojas Hirolikar", role: "Member" },
      { name: "Pranit Dhanade", role: "Member" },
      { name: "Dhruv Agarwal", role: "Member" },
      { name: "Shivam Gaikwad", role: "Member" },
      { name: "Rakhi Bhandare", role: "Member" },
      { name: "Adarsh Bansode", role: "Member" },
      { name: "Samruddhi Kabade", role: "Member" },
    ]
  },
  {
    name: "Project Team",
    members: [
      { name: "Dikshant Patil", role: "Joint Head" },
      { name: "Tarun Sayal", role: "Member" },
      { name: "Ishika Pujari", role: "Member" },
      { name: "Yadnesh Gunjal Patil", role: "Member" },
      { name: "Anant Bardia", role: "Member" },
      { name: "Parth Gurav", role: "Member" },
      { name: "Aditya Patil", role: "Member" },
      { name: "Kajal Sharma", role: "Member" },
      { name: "Srujit Yennam", role: "Member" },
      { name: "Atharva Jaiswal", role: "Member" },
      { name: "Aditya Mamarde", role: "Member" },
      { name: "Piyush Dnyaneshwar Suryawanshi", role: "Member" },
      { name: "Aryan Anand Gham", role: "Member" },
      { name: "Ayush Shete", role: "Member" },
      { name: "Taha Syed", role: "Member" },
      { name: "Onkar Adinath Ekatpure", role: "Member" },
      { name: "Pushpraj Patil", role: "Member" },
    ]
  },
  {
    name: "Social Media Team",
    members: [
      { name: "Vedant", role: "Joint Head" },
      { name: "Sarthak Shrikant Bagul", role: "Member" },
      { name: "Piyush Balaji Dahatonde", role: "Member" },
      { name: "Sarthak Pardeshi", role: "Member" },
      { name: "Anagha Pawar", role: "Member" },
      { name: "Harshdeep Khandare", role: "Member" },
    ]
  },
  {
    name: "Finance Team",
    members: [
      { name: "Vedant Pisal", role: "Member" },
      { name: "Kartik Patil", role: "Member" },
      { name: "Omkar Patil", role: "Member" },
      { name: "Saurabh Shivdarshan Pawar", role: "Member" },
      { name: "Arya Joshi", role: "Member" },
    ]
  },
  {
    name: "Documentation Team",
    members: [
      { name: "Rohan Raut", role: "Joint Head" },
      { name: "Prerana Pasare", role: "Member" },
      { name: "Rushikesh Bhosale", role: "Member" },
      { name: "Bhaven Peddi", role: "Member" },
      { name: "Vanshika Vivek Dekate", role: "Member" },
      { name: "Omkar Sharad Zadbuke", role: "Member" },
      { name: "Sanket Kalaskar", role: "Member" },
      { name: "Suyash Satish Jadhav", role: "Member" },
    ]
  },
  {
    name: "Publicity Team",
    members: [
      { name: "Sai Bhosale", role: "Joint Head" },
      { name: "Vihaan Dhanapune", role: "Member" },
      { name: "Affan Muhammad Yunus Shaikh", role: "Member" },
      { name: "Aryan Thigale", role: "Member" },
      { name: "Rajwardhan Dhananjay Yewale", role: "Member" },
      { name: "Nirmala Pawar", role: "Member" },
      { name: "Sonal Tiwari", role: "Member" },
      { name: "Harshvardhan Sanjay Tile", role: "Member" },
      { name: "Lata Parab", role: "Member" },
      { name: "Vedant Thote", role: "Member" },
      { name: "Soham Sannake", role: "Member" },
      { name: "Yashashree Jadhav", role: "Member" },
    ]
  },
  {
    name: "Activity Team",
    members: [
      { name: "Mayank Patil", role: "Joint Head" },
      { name: "Divita Rao", role: "Member" },
      { name: "Nandini Madavi", role: "Member" },
      { name: "Parth Sadanand Debadwar", role: "Member" },
      { name: "Eshwari Pawar", role: "Member" },
      { name: "Kapil Prashant Savargaonkar", role: "Member" },
      { name: "Masira Hirasaheb Eksambe", role: "Member" },
      { name: "M. Tahmid F. Shaikh", role: "Member" },
      { name: "Supriya Koli", role: "Member" },
      { name: "Harshvardhan Jadhav", role: "Member" },
      { name: "Reva Jadhav", role: "Member" },
      { name: "Nidhi Ruiwale", role: "Member" },
      { name: "Vaishnavi Dhakare", role: "Member" },
      { name: "Rushikesh Kale", role: "Member" },
    ]
  },
  {
    name: "Design Team",
    members: [
      { name: "Chaitanya Pilane", role: "Joint Head" },
      { name: "Sarthak Sarode", role: "Member" },
      { name: "Saumitra Said", role: "Member" },
      { name: "Namrata Niture", role: "Member" },
      { name: "Shelke Om Sandip", role: "Member" },
      { name: "Bhagyesh Swami", role: "Member" },
      { name: "Mansvi Gawai", role: "Member" },
      { name: "Tanavi Donewar", role: "Member" },
      { name: "Animesh Deshpande", role: "Member" },
      { name: "Supriya Mudhe", role: "Member" },
      { name: "Tanvi Gaikwad", role: "Member" },
      { name: "Soham Manjratkar", role: "Member" },
    ]
  }
];

function MemberCard({ name, role }: { name: string, role: string }) {
  const photo = photoMap[name];

  return (
    <div className="flex flex-col group">
      <div className="w-full aspect-[3/4] bg-[var(--color-surface-alt)] border border-[var(--color-ink)]/10 mb-4 overflow-hidden relative">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface-alt)]">
            <span className="font-display font-bold text-4xl text-[var(--color-ink)]/10">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-sans font-bold text-lg text-[var(--color-ink)]">{name}</h3>
      <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider mt-1">{role}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      <div className="container mx-auto">
        <SectionReveal>
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6">
            The Team
          </h1>
          <p className="font-sans text-xl text-[var(--color-muted)] max-w-2xl mb-24">
            Meet the researchers, developers, and designers driving innovation at VIT Pune's IoT Club.
          </p>
        </SectionReveal>

        {/* Core Committee */}
        <section className="mb-32">
          <SectionReveal delay={0.1}>
            <h2 className="font-mono text-sm tracking-[0.2em] text-[var(--color-ink)] mb-12 border-b border-[var(--color-ink)]/10 pb-4">CORE COMMITTEE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {coreCommittee.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Domain Heads */}
        <section className="mb-32">
          <SectionReveal delay={0.1}>
            <h2 className="font-mono text-sm tracking-[0.2em] text-[var(--color-ink)] mb-12 border-b border-[var(--color-ink)]/10 pb-4">DOMAIN HEADS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {domainHeads.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Teams */}
        {teams.map((team) => (
          <section key={team.name} className="mb-24">
            <SectionReveal delay={0.1}>
              <h2 className="font-mono text-sm tracking-[0.2em] text-[var(--color-ink)] mb-12 border-b border-[var(--color-ink)]/10 pb-4">{team.name.toUpperCase()}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
                {team.members.map((member) => (
                  <MemberCard key={member.name} {...member} />
                ))}
              </div>
            </SectionReveal>
          </section>
        ))}
        
      </div>
    </div>
  );
}
