import { useRouter } from "next/router";
import SettingsIcon from "@mui/icons-material/Settings";
import { useContext, useState } from "react";
import FocusTrap from "focus-trap-react";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";

export default function Settings() {
  const router = useRouter();
  const locale = router.locale;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className={`fixed top-5
      ${locale === "en" ? "right- text-white" : "left- text-white"}
      z-10 bg-primary-3 p-[10px] rounded-[5px]`}
      >
        <SettingsIcon className="fill- w-[30px] h-[30px]" />
      </button>
      {/* if the settings modal is open, show blurred overlay behind it: */}
      {isOpen && (
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-primary-5 bg-opacity-20 backdrop-blur-lg z-40"></div>
      )}
      <FocusTrap
        active={isOpen}
        focusTrapOptions={{
          escapeDeactivates: true, // default
          clickOutsideDeactivates: true,
          onActivate: () => {
            document.body.classList.add("no-scroll-due-to-settings-open");
          },
          onDeactivate: () => {
            setIsOpen(false);
            document.body.classList.remove("no-scroll-due-to-settings-open");
          },
        }}
      >
        {isOpen ? (
          // the modal:
          <div className="fixed top-2/4 left-2/4 bg-secondary-2 bg-opacity-70 p-2 min-w-[20%] w-[250px] max-w-[90%] z-50 -translate-x-2/4 -translate-y-2/4">
            {/* the link to switch lang: */}
            <Link
              href={router.asPath}
              locale={locale === "en" ? "he" : "en"}
              className="m-auto flex justify-center gap-3"
            >
              <LanguageIcon />
              <span>{locale === "en" ? "עברית" : "English"} </span>
            </Link>
            {/* the button to switch theme:
            <button type="button" className="block w-full" onClick={toggleTheme}>
              Change Theme
            </button> */}
          </div>
        ) : (
          // empty & hidden div, because FocusTrap must contain a child inside of it
          <div className="hidden"></div>
        )}
      </FocusTrap>
    </>
  );
}
