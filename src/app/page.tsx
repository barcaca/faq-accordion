import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { AccordionTitle } from "@/components/Accordion/AccordionTitle";
import { Footer } from "@/components/Footer";

export default function Home() {
  const faqData = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      text: `Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio building.`,
    },
    {
      title: "Is Frontend Mentor free?",
      text: `Yes, Frontend Mentor offers both free and premium coding
        challenges, with the free option providing access to a range of
        projects suitable for all skill levels.`,
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      text: `Yes, you can use projects completed on Frontend Mentor in your
        portfolio. It's an excellent way to showcase your skills to
        potential employers!`,
    },
    {
      title: "How can I get help if I'm stuck on a challenge?",
      text: `The best place to get help is inside Frontend Mentor's
        Discord community. There's a help channel where you can ask
        questions and seek support from other community members.`,
    },
  ];

  return (
    <Container>
      <main className="flex  flex-col justify-start rounded-lg bg-white p-4 ">
        <AccordionTitle />
        <div className="flex flex-col ">
          {faqData.map(({ title, text }, index) => (
            <Accordion.Wrapper key={index}>
              <Accordion.Summary title={title}>
                <Accordion.Icon />
              </Accordion.Summary>
              <Accordion.Text text={text} />
            </Accordion.Wrapper>
          ))}
        </div>
      </main>
      <Footer />
    </Container>
  );
}
