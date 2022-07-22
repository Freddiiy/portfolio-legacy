import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import { useLocale } from "../../hooks/useLocale";
import contactLocale from "../../locales/contactform.json";

export default function ContactForm() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState("");

  let contactText = useLocale(contactLocale);
  const [formData, setFormData] = useState({
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

    if (formData.email == "") return;
    if (formData.subject == "") return;
    if (formData.message == "") return;

    let data = {
      from: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const url = "/api/mail";
    const response = await axios.post(url, data);
    const resData = await response.data;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="px-4 py-4">
          <div className="grid grid-cols-1 gap-3">
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
                label={contactText.name}
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
              className="mt-2 border-2 border-white focus:outline-none focus:border-purple-400 focus:border-2 block w-full shadow-sm sm:text-sm px-4 py-1 rounded-xl bg-black transition-all duration-150 resize-none"
              rows={6}
            />
          </div>
          <div className="flex mt-3 justify-end">
            <Button
              color="emerald"
              type="submit"
              onClick={handleSubmit}
              className="w-auto px-6 sm:px-16"
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
