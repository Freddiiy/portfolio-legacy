import ContactForm from "./ContactForm";
import contactLocale from "../../locales/contactform.json";
import { useLocale } from "../../hooks/useLocale";
import Title from "../../components/Title";
import SubText from "../../components/SubText";

export default function ContactSection() {
  let contactText = useLocale(contactLocale);
  return (
    <div className="grid lg:grid-cols-2">
      <div className="p-4">
        <Title text={contactText.contactMe} />
		  <SubText>{contactText.contactText}</SubText>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
