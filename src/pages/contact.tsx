import {NextPage} from "next";
import ContactForm from "../features/Contact/ContactForm";
import ContactSection from "../features/Contact/ContactPage";

const Contact: NextPage = () => {
	return (
		<section className="container mx-auto pt-24">
			<ContactSection />
		</section>
	);
};

export default Contact;
