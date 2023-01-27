import { useTranslation } from "next-i18next";
import useFormData from "../hooks/useFormData";
import Input from "./Input";
import {
  nameError,
  emailError,
  phoneError,
  subjectError,
} from "../public/util/contact-us-validations";
import { useState } from "react";
import axios from "axios";
export default function LetsTalkSection() {
  const inputsDataDefault = {
    name: "",
    phone: "",
    subject: "",
    email: "",
  };
  const { inputsData, setInputsData, handleInputChange } =
    useFormData(inputsDataDefault);

  const statusEnum = {
    init: "The initial status, before user wrote anything",
    loading: "Sending the form to the backend",
    thanks: "Form sent successfully",
    error: "Form couldn't be sent",
  };

  const [status, setStatus] = useState(statusEnum.init);

  async function handleSubmit() {
    setStatus(statusEnum.loading);
    try {
      await axios.put("/api/save-details", inputsData);
      setStatus(statusEnum.thanks);
      setInputsData(inputsDataDefault);
    } catch (error) {
      setStatus(statusEnum.error);
    }
  }

  const { t } = useTranslation("common");

  return (
    <div className="p-5" id="letsTalkSection">
      <span className="text-3xl font-bold">{t("build-future")}</span>
      <div className="p-3 bg-white bg-opacity-40 backdrop-blur-sm rounded-sm flex flex-col gap-3">
        <Input
          checkErrorCallback={nameError}
          valueObj={inputsData}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder={t("inputs.name")}
        />
        <Input
          checkErrorCallback={phoneError}
          valueObj={inputsData}
          onChange={handleInputChange}
          type="tel"
          name="phone"
          placeholder={t("inputs.phone")}
        />
        <Input
          checkErrorCallback={subjectError}
          valueObj={inputsData}
          onChange={handleInputChange}
          type="text"
          name="subject"
          placeholder={t("inputs.subject")}
        />
        <Input
          checkErrorCallback={emailError}
          valueObj={inputsData}
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder={t("inputs.email")}
        />
        <span className="text-sm text-gray-900">{t("wont-share")}</span>
        <button
          disabled={
            emailError(inputsData.email) ||
            subjectError(inputsData.subject) ||
            phoneError(inputsData.phone) ||
            nameError(inputsData.name) ||
            status === statusEnum.loading
          }
          onClick={handleSubmit}
          type="button"
          className="p-3 bg-gray-500 mt-3 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === statusEnum.loading ? t("loading") : t("send")}
        </button>
        {status === statusEnum.thanks && (
          <span className="text-[green] text-center">
            {t("thanks-for-sending")}
          </span>
        )}
        {status === statusEnum.error && (
          <span className="text-red-500 text-center">{t("error-sending")}</span>
        )}
      </div>
    </div>
  );
}
