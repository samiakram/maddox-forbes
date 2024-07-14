import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import DesignSvg from "../../(Components)/DesignSVG";
import SlidingInComponent from "../../(Components)/SlidingIn";

export default function BuilderInquiryForm() {
  //Customer Info
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  //Time
  const [contactType, setContactType] = useState("email");
  const [time, setTime] = useState("PM");
  //Build Type
  const [buildType, setBuildType] = useState(["An Existing Home"]);
  //Area
  const [area, setArea] = useState(["King/Pilot Mountain/ Mt. Airy"]);

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

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setContactType(value);
  };

  const handleAMPMChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setTime(value);
  };

  const handleBuildType = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (buildType.includes(value)) {
      let temp = buildType.filter((e) => e !== value);
      setBuildType(temp);
    } else {
      setBuildType([...buildType, value]);
    }
  };

  const handleAreaType = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (area.includes(value)) {
      let temp = area.filter((e) => e !== value);
      setArea(temp);
    } else {
      setArea([...area, value]);
    }
  };

  return (
    <>
      <section
        className="bg-offWhite  text-navy md:px-0 px-4"
        id="builder-form"
      >
        <div className="container mx-auto flex flex-col gap-6 items-center justify-center py-20">
          <SlidingInComponent class="flex flex-col  justify-center items-center">
            <h1 className="text-2xl font-[felix] font-bold  text-center">
              Builder Inquiry Request Form
            </h1>
            <div className="w-[70%]">
              <DesignSvg />
            </div>
          </SlidingInComponent>
          <SlidingInComponent delay={0.1}>
            <p className="font-[felix] italic">
              Fill out the form below to request a mortgage concierge reach out
              to you directly!
            </p>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.2}
            class="flex flex-col gap-4 items-start justify-center w-full"
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
                Message to Builder:
              </h1>
              <fieldset className="flex flex-col gap-5 font-[felix] mt-5 border border-black p-10">
                <h3 className="font-[felix] italic text-lg text-center">
                  I want to learn more about...
                </h3>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-4 items-center">
                    <input
                      checked={buildType.includes("An Existing Home")}
                      onChange={(e) => {
                        handleBuildType(e);
                      }}
                      type="checkbox"
                      id="existingHome"
                      value={"An Existing Home"}
                    />
                    <label htmlFor="existingHome">An Existing Home</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={buildType.includes("New Builds")}
                      type="checkbox"
                      id="newBuilds"
                      value={"New Builds"}
                      onChange={(e) => {
                        handleBuildType(e);
                      }}
                    />
                    <label htmlFor="newBuilds">New Builds</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={buildType.includes("Neighborhood Blueprints")}
                      onChange={(e) => {
                        handleBuildType(e);
                      }}
                      type="checkbox"
                      id="neighborhoodBlueprints"
                      value={"Neighborhood Blueprints"}
                    />
                    <label htmlFor="neighborhoodBlueprints">
                      Neighborhood Blueprints
                    </label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={buildType.includes("Custom Builds")}
                      type="checkbox"
                      id="customBuilds"
                      value={"Custom Builds"}
                      onChange={(e) => {
                        handleBuildType(e);
                      }}
                    />
                    <label htmlFor="customBuilds">Custom Builds</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={buildType.includes("Historic Home Renovations")}
                      onChange={(e) => {
                        handleBuildType(e);
                      }}
                      type="checkbox"
                      id="homeRenovations"
                      value={"Historic Home Renovations"}
                    />
                    <label htmlFor="homeRenovations">
                      Historic Home Renovations
                    </label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={buildType.includes("Barndominiums")}
                      type="checkbox"
                      id="barndominiums"
                      value={"Barndominiums"}
                      onChange={(e) => {
                        handleBuildType(e);
                      }}
                    />
                    <label htmlFor="barndominiums">Barndominiums</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={buildType.includes(
                        "Hand Crafted Pole Barns and Stables"
                      )}
                      onChange={(e) => {
                        handleBuildType(e);
                      }}
                      type="checkbox"
                      id="stables"
                      value={"Hand Crafted Pole Barns and Stables"}
                    />
                    <label htmlFor="stables">
                      Hand Crafted Pole Barns and Stables
                    </label>
                  </div>
                </div>
                <h3 className="font-[felix] italic text-lg text-center">
                  Area(S) I am interested in:
                </h3>
                <div className="flex md:flex-row flex-col justify-around mb-5">
                  <div className="flex gap-4 items-center">
                    <input
                      checked={area.includes("King/Pilot Mountain/ Mt. Airy")}
                      onChange={(e) => {
                        handleAreaType(e);
                      }}
                      type="checkbox"
                      id="mt"
                      value={"King/Pilot Mountain/ Mt. Airy"}
                    />
                    <label htmlFor="mt">King/Pilot Mountain/ Mt. Airy</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={area.includes("Foothills")}
                      type="checkbox"
                      id="foothills"
                      value={"Foothills"}
                      onChange={(e) => {
                        handleAreaType(e);
                      }}
                    />
                    <label htmlFor="foothills">Foothills</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={area.includes("Triad")}
                      onChange={(e) => {
                        handleAreaType(e);
                      }}
                      type="checkbox"
                      id="Triad"
                      value={"Triad"}
                    />
                    <label htmlFor="Triad">Triad</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={area.includes("RTP")}
                      type="checkbox"
                      id="RTP"
                      value={"RTP"}
                      onChange={(e) => {
                        handleAreaType(e);
                      }}
                    />
                    <label htmlFor="RTP">RTP</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={area.includes("Charlotte")}
                      onChange={(e) => {
                        handleAreaType(e);
                      }}
                      type="checkbox"
                      id="Charlotte"
                      value={"Charlotte"}
                    />
                    <label htmlFor="Charlotte">Charlotte</label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input
                      checked={area.includes("Costal")}
                      type="checkbox"
                      id="Costal"
                      value={"Costal"}
                      onChange={(e) => {
                        handleAreaType(e);
                      }}
                    />
                    <label htmlFor="Costal">Costal</label>
                  </div>
                </div>
                <div className="flex flex-col  text-center md:flex-row gap-5 items-center">
                  <label htmlFor="time" className="font-[felix]">
                    Please indicate your preferred contact method & Time :
                  </label>
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      id="emailCheck"
                      value="email"
                      checked={contactType === "email"}
                      onChange={(e) => {
                        handleRadioChange(e);
                      }}
                    />
                    <label htmlFor="emailCheck">Email</label>
                    <input
                      type="radio"
                      id="textCheck"
                      value="text"
                      checked={contactType === "text"}
                      onChange={(e) => {
                        handleRadioChange(e);
                      }}
                    />
                    <label htmlFor="textCheck">Text</label>
                    <input
                      type="radio"
                      id="phoneCheck"
                      value="phone"
                      checked={contactType === "phone"}
                      onChange={(e) => {
                        handleRadioChange(e);
                      }}
                    />
                    <label htmlFor="phoneCheck">Phone</label>
                  </div>
                  <div className="flex items-center justify-center flex-row gap-2">
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
