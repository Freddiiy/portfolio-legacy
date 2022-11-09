import ContactForm from "./ContactForm";
import contactLocale from "../../locales/contactform.json";
import {useLocale} from "../../hooks/useLocale";
import Title from "../Title";
import SubText from "../SubText";

export default function ContactSection() {
	let contactText = useLocale(contactLocale);
	return (
		<div className="grid lg:grid-cols-1 max-w-4xl mx-auto">
			<div className="px-4 pb-10">
				<Title text={contactText.contactMe}/>
				<SubText>{contactText.contactText}</SubText>
			</div>
			<div>
				<ContactForm/>
			</div>
		</div>
	);
}
