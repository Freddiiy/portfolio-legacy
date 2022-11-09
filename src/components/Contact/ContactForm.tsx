import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import axios from "axios";
import Button from "../Button";
import Input from "../Form/Input";
import {useLocale} from "../../hooks/useLocale";
import contactLocale from "../../locales/contactform.json";

export default function ContactForm() {
	let contactText = useLocale(contactLocale);
	const [isInvalid, setIsInvalid] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [buttonText, setButtonText] = useState("Send");
	const disableButton = () => setButtonDisabled(true);
	const enableButton = () => setButtonDisabled(false);
	const [deg, setDeg] = useState(0);
	const formBox = React.useRef<HTMLFormElement>(null);

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			if (formBox.current == null) return;
			const rect = formBox.current.getBoundingClientRect();
			const anchorX = rect.left + rect.width / 2;
			const anchorY = rect.top + rect.height / 2;

			const angleDeg = angleToMouse(e.clientX, e.clientY, anchorX, anchorY);
			setDeg(angleDeg);
		});

		return window.removeEventListener("mousemove", () => setDeg(0))
	}, [setDeg])

	const angleToMouse = (mx: number, my: number, ex: number, ey: number) => {
		const dy = ey - my;
		const dx = ey - mx;
		const rad = Math.atan2(dy, dx);
		return rad * 180 / Math.PI;
	}

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
		return formData.message != "";

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
			<form onSubmit={handleSubmit} ref={formBox}>
				<div
					className="p-0.5 rounded-xl"
					style={{
						backgroundImage: `linear-gradient(${deg + 45}deg, rgba(147,51,234,1) 0%, rgba(74,222,128,1) 50%, rgba(0,0,0,0) 80%, rgba(0,0,0,0) 100%)`,
					}}>
					<div className={"bg-black rounded-xl px-6 pt-6 pb-6"}>
						<div className="grid grid-cols-6 gap-4">
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
									label={contactText.subject}
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
								/>
							</div>
							<div className="col-span-6 sm:col-span-6">
								<Input
									label={contactText.email}
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<div className="col-span-6">
								<label
									htmlFor="message"
									className="block text-md font-medium text-neutral-400"
								>
									{contactText.message}
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder={contactText.messagePlaceholder}
									className="mt-2 border border-neutral-500 outline-none focus:border-purple-400 focus:border block w-full shadow-sm sm:text-sm px-4 py-1 rounded-md bg-black transition-all duration-200 resize-none font-bold"
									rows={6}
								/>
							</div>
							<div className="flex mt-3 justify-end col-span-6">
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
					</div>
				</div>
			</form>
		</>
	);
}
