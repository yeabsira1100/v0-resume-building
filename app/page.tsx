import { Mail, Phone, MapPin, Linkedin, Send, GraduationCap, Briefcase, Code, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-4">Yeabsira Adnew Sissay</h1>
              <p className="text-xl text-muted-foreground mb-6">Accounting & Finance Student | Aspiring Versatilist</p>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                A motivated 4th-year student at Addis Ababa University combining financial expertise with creativity,
                critical thinking, and social awareness. Driven by continuous learning and meaningful contribution.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#experience">View Experience</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-muted">
                <Image src="/professional-portrait-ethiopian-student.jpg" alt="Yeabsira Adnew Sissay" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="border-b border-border">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I am a motivated and curious student with a strong background in social sciences. As a clear
                communicator, avid reader, and lifelong learner, I enjoy exploring new ideas across disciplines.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                My goal is to become a versatilist—combining financial expertise with creativity, critical thinking, and
                social awareness to adapt to diverse roles and contribute meaningfully across sectors.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-muted-foreground">Addis Ababa University</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <div className="space-y-3">
                <Card className="p-4">
                  <p className="font-medium">📚 Reading novels and nonfiction</p>
                </Card>
                <Card className="p-4">
                  <p className="font-medium">🎬 Movie making and visual storytelling</p>
                </Card>
                <Card className="p-4">
                  <p className="font-medium">💼 Finance and economic analysis</p>
                </Card>
                <Card className="p-4">
                  <p className="font-medium">📋 Program organizing and coordinating</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-border">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Accounting Software</Badge>
                <Badge variant="secondary">Financial Literacy</Badge>
                <Badge variant="secondary">Digital Marketing</Badge>
                <Badge variant="secondary">Microsoft Office</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Communication</Badge>
                <Badge variant="secondary">Leadership</Badge>
                <Badge variant="secondary">Team Collaboration</Badge>
                <Badge variant="secondary">Critical Thinking</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Professional Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Research</Badge>
                <Badge variant="secondary">Program Organizing</Badge>
                <Badge variant="secondary">Customer Service</Badge>
                <Badge variant="secondary">Bookkeeping</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b border-border">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Internship</h3>
                  <p className="text-primary font-medium">HST Consulting PLC, Wolo Sefer</p>
                </div>
                <Badge>2023-2024</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Gained practical experience in taxation, bookkeeping, and customer service. Worked with real-world
                financial operations and reporting systems.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Private Tutor</h3>
                  <p className="text-primary font-medium">Freelance</p>
                </div>
                <Badge>Ongoing</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Provide academic support in relevant subjects, helping students achieve their learning goals through
                personalized instruction and mentoring.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Finance Assistant</h3>
                  <p className="text-primary font-medium">Various Organizations</p>
                </div>
                <Badge>Past Experience</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Exposure to basic financial operations, reporting, and administrative support across multiple
                organizational settings.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section id="volunteering" className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Community Engagement</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Blood Donation Programs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Active participant in blood donation campaigns, contributing to community health and awareness
                initiatives.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Rehabilitation Center Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Helped rehabilitation centers by providing clothes and other essential materials to support those in
                need.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">My Generation Group</h3>
              <p className="text-muted-foreground leading-relaxed">
                Active group member contributing to collaborative initiatives and community development projects.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="border-b border-border">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <Card className="p-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Arts in Accounting and Finance</h3>
                <p className="text-xl text-primary font-medium mb-4">Addis Ababa University</p>
                <p className="text-muted-foreground mb-4">4th Year Student (Expected Graduation: 2025)</p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <strong>Background:</strong> Social Science
                  </p>
                  <p className="text-foreground">
                    <strong>Relevant Courses:</strong> Communicative English, Leadership, Digital Marketing, Accounting
                    Software
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Career Goal */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Career Goal</h2>
            <p className="text-xl leading-relaxed text-foreground text-pretty">
              To develop into a versatile professional with strong analytical, financial, and creative skills, capable
              of adapting to diverse roles and contributing meaningfully across sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-border">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a conversation about
                finance, education, and social impact.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:yeabsirasissay-00@gmail.com" className="text-primary hover:underline">
                      yeabsirasissay-00@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+251906128774" className="text-primary hover:underline">
                      +251 906 128 774
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Connect Online</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a
                      href="https://www.linkedin.com/in/yeabsira-a-s-94074a37b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="https://t.me/if21if" target="_blank" rel="noopener noreferrer">
                      <Send className="w-5 h-5 mr-2" />
                      Telegram: @if21if
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 Yeabsira Adnew Sissay. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/yeabsira-a-s-94074a37b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/if21if"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
