import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import {useLocale} from "../../hooks/useLocale";
import contactLocale from "../../locales/contactform.json";

export default function ContactForm() {
	let contactText = useLocale(contactLocale);
	const [isInvalid, setIsInvalid] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [buttonText, setButtonText] = useState("Send");
	const disableButton = () => setButtonDisabled(true);
	const enableButton = () => setButtonDisabled(false);

	const [error, setError] = useState("");

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	function handleChange(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		event.preventDefault();

		const value = event.target.value;
		setFormData({
			...formData,
			[event.target.name]: value,
		});
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		disableButton();
		setButtonText("Sender...");

		console.log("handle submit");

		validateInputFields();

		let data = {
			name: formData.name,
			from: formData.email,
			subject: formData.subject,
			message: formData.message,
		};

		const response = await axios.post("/api/mail", data);

		if (response.status == 200) {
			setButtonText("Sendt!");
			enableButton();
			clearInputFields();
		}

		if (response.status == 500) {
			setError("Der skete en fejl ved at sende mailen");
			enableButton();
		}
	}

	function validateInputFields() {
		if (formData.name == "") return false;
		if (formData.email == "") return false;
		if (formData.subject == "") return false;
		if (formData.message == "") return false;
		return true;
	}

	function clearInputFields() {
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="px-4 py-4">
					<div className="grid grid-cols-1 gap-3">
						<div className="col-span-6 sm:col-span-3">
							<Input
								label={contactText.name}
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-6 sm:col-span-3">
							<Input
								label={contactText.email}
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-6 sm:col-span-3">
							<Input
								label={contactText.subject}
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="pt-3">
						<label
							htmlFor="message"
							className="block text-md font-medium text-white"
						>
							{contactText.message}
						</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							className="mt-2 border-2 border-gray-300 opacity-50 focus:opacity-100 focus:outline-none focus:border-purple-400 focus:border-2 block w-full shadow-sm sm:text-sm px-4 py-1 rounded-xl bg-black transition-all duration-200 resize-none"
							rows={6}
						/>
					</div>
					<div className="flex mt-3 justify-end">
						<Button
							color="emerald"
							type="button"
							className="w-auto px-6 sm:px-16 opacity-100 disabled:opacity-50 disabled:hover:bg-emerald-500 disabled:hover:text-white disabled:cursor-not-allowed"
							disabled={buttonDisabled || !validateInputFields()}
							onClick={handleSubmit}
						>
							{buttonText}
						</Button>
					</div>
				</div>
			</form>
		</>
	);
}
