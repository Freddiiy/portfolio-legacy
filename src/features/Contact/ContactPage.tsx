import ContactForm from "./ContactForm";
import contactLocale from "../../locales/contactform.json";
import { useLocale } from "../../hooks/useLocale";

export default function ContactSection() {
  let contactText = useLocale(contactLocale);
  return (
    <div className="grid lg:grid-cols-2">
      <div className="p-4">
        <h2 className="text-center text-2xl sm:text-4xl font-bold">
          {contactText.contactMe}
        </h2>
        <p className="text-gray-400 pt-4 px-6">{contactText.contactText}</p>
        <div className="flex px-6 lg:text-center lg:justify-center text-gray-400">
          <ul>
            <li className="pt-2">sms: 40 85 50 28</li>
            <li className="pt-2">email: frederikgaller@live.dk</li>
          </ul>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
