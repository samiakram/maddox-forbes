import { ChangeEvent, FormEvent, useState } from "react";
import DesignSvg from "../../(Components)/DesignSVG";
import SlidingInComponent from "../../(Components)/SlidingIn";
import { Span } from "next/dist/trace";

export default function LoanInquiryForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactType, setContactType] = useState("email");
  const [time, setTime] = useState("PM");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate name
    if (!name.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!phone.match(/^\d{10}$/)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }

    // Validate email
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }

    console.log(email, name, phone, emailError, nameError, phoneError);

    if (nameError || phoneError || emailError) {
      return;
    }

    // Handle form submission here (e.g., send data to backend)

    // Reset form fields
    setName("");
    setPhone("");
    setEmail("");
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (phoneError) {
      setPhoneError("");
    }
    setPhone(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (emailError) {
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (nameError) {
      setNameError("");
    }
    setName(e.target.value);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setContactType(value);
  };

  const handleAMPMChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setTime(value);
  };

  return (
    <>
      <section className="bg-offWhite text-navy md:px-0 px-4 " id="loan-form">
        <div className="container mx-auto flex flex-col gap-6 items-center justify-center py-20">
          <SlidingInComponent class="flex flex-col  justify-center items-center">
            <h1 className="text-2xl font-[felix] font-bold  text-center">
              Loan Inquiry Request Form
            </h1>
            <div className="w-[70%]">
              <DesignSvg />
            </div>
          </SlidingInComponent>
          <SlidingInComponent delay={0.1}>
            <p className="font-[felix] italic text-center">
              Fill out the form below to request a mortgage concierge reach out
              to you directly!
            </p>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.2}
            class="flex flex-col  gap-4 items-start justify-center w-full"
          >
            <form
              method="POST"
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col w-full gap-4"
            >
              <fieldset className="flex flex-col gap-2 w-full">
                <div className="flex gap-1">
                  <label htmlFor="name" className="font-[felix] font-bold">
                    Name:
                  </label>
                  <input
                    value={name}
                    onChange={handleNameChange}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-transparent focus:outline-none border-b border-black font-[felix]"
                  />
                </div>
                {nameError ? (
                  <span className="text-red-500 text-sm italic">
                    {nameError}
                  </span>
                ) : (
                  <span style={{ visibility: "hidden" }} className="text-sm">
                    Placeholder
                  </span>
                )}
              </fieldset>
              <fieldset className="flex flex-col gap-2 w-full">
                <div className="flex gap-1">
                  <label htmlFor="phone" className="font-[felix] font-bold">
                    Phone:
                  </label>
                  <input
                    value={phone}
                    onChange={handlePhoneChange}
                    type="phone"
                    name="phone"
                    id="phone"
                    className="bg-transparent focus:outline-none border-b border-black font-[felix]"
                  />
                </div>
                {phoneError ? (
                  <span className="text-red-500 text-sm italic">
                    {phoneError}
                  </span>
                ) : (
                  <span style={{ visibility: "hidden" }} className="text-sm">
                    Placeholder
                  </span>
                )}
              </fieldset>
              <fieldset className="flex flex-col gap-2 w-full">
                <div className="flex gap-1">
                  <label htmlFor="email" className="font-[felix] font-bold">
                    Email:
                  </label>
                  <input
                    value={email}
                    onChange={handleEmailChange}
                    type="text"
                    name="email"
                    id="email"
                    className="bg-transparent focus:outline-none border-b border-black font-[felix]"
                  />
                </div>
                {emailError ? (
                  <span className="text-red-500 text-sm italic">
                    {emailError}
                  </span>
                ) : (
                  <span style={{ visibility: "hidden" }} className="text-sm">
                    Placeholder
                  </span>
                )}
              </fieldset>
              <h1 className="font-[felix] text-center text-xl mt-5">
                Message to mortgage concierge:
              </h1>
              <fieldset className="flex text-center md:text-left items-center md:flex-row flex-col gap-5 font-[felix] mt-5 border border-black p-10">
                <label htmlFor="time" className="font-[felix]">
                  Please indicate your preferred contact method & Time :
                </label>
                <div className="flex flex-row gap-2">
                  <input
                    type="radio"
                    id="emailCheck"
                    value="email"
                    checked={contactType === "email"}
                    onChange={(e) => {
                      handleCheckboxChange(e);
                    }}
                  />
                  <label htmlFor="emailCheck">Email</label>
                  <input
                    type="radio"
                    id="textCheck"
                    value="text"
                    checked={contactType === "text"}
                    onChange={(e) => {
                      handleCheckboxChange(e);
                    }}
                  />
                  <label htmlFor="textCheck">Text</label>
                  <input
                    type="radio"
                    id="phoneCheck"
                    value="phone"
                    checked={contactType === "phone"}
                    onChange={(e) => {
                      handleCheckboxChange(e);
                    }}
                  />
                  <label htmlFor="phoneCheck">Phone</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="radio"
                    id="amCheck"
                    value="AM"
                    checked={time === "AM"}
                    onChange={(e) => {
                      handleAMPMChange(e);
                    }}
                  />
                  <label htmlFor="amCheck">AM</label>
                  <input
                    type="radio"
                    id="pmCheck"
                    value="PM"
                    checked={time === "PM"}
                    onChange={(e) => {
                      handleAMPMChange(e);
                    }}
                  />
                  <label htmlFor="pmCheck">PM</label>
                </div>
              </fieldset>
              <button className="font-[felix] font-bold text-xl mt-10">
                SEND
              </button>
            </form>
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}
