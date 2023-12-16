import Image from "next/image";

export function AccordionTitle() {
  return (
    <div className="flex gap-6">
      <Image
        src={"/icon-star.svg"}
        alt={"star"}
        width={20}
        height={20}
        className="md:w-7"
      />
      <h1 className="text-3xl font-bold md:text-5xl">FAQs</h1>
    </div>
  );
}
