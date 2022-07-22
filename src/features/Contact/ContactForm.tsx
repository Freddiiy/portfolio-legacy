import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";

export default function ContactForm() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState("");
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
        <Input
          label="Din email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Emne"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label htmlFor="message">Din besked</label>
        <textarea
          name="message"
          value={formData.subject}
          onChange={handleChange}
        />
        <Button color="emerald" type="submit" onClick={handleSubmit}>
          Send
        </Button>
      </form>
    </>
  );
}
