interface AccordionTextProps {
  text: string;
}

export function AccordionText({ text }: AccordionTextProps) {
  return (
    <div>
      <p className="py-4 text-sm text-purple-900">{text}</p>
    </div>
  );
}
