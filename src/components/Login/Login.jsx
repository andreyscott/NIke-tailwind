import React, { useState } from "react";
import Modal from "react-modal";
import SelectCountries from "./LoginModal/SelectCountries";

const LoginModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Gender, setGender] = useState(undefined);
  const [RegisterModalIsOpen, RegisterIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function closeHandleRegister() {
    setIsOpen(false);
    openRegister();
  }
  function closeHandleLogin() {
    setIsOpen(true);
    closeRegister();
  }

  function openRegister() {
    RegisterIsOpen(true);
  }
  function closeRegister() {
    RegisterIsOpen(false);
  }
  return (
    <>
      <li onClick={openModal}>Sign In</li>
      <div>
        <Modal
          className=" absolute bg-white z-20 top-10 left-10 right-10 bottom-10   p-10 rounded-md shadow-md  "
          isOpen={modalIsOpen}
          closeTimeoutMS={500}
          onRequestClose={closeModal}
          style={customStyles}
          overlayClassName=" fixed top-0 left-0 right-0 bottom-0 shadow-lg z-20"
        >
          <button className="absolute top-2 right-3" onClick={closeModal}>
            <i class="fa-solid fa-x"></i>
          </button>
          <div className="mt-4 flex justify-center mb-4">
            <img
              src="https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png"
              alt="nike"
            />
          </div>
          <div className="font-extrabold text-xl text-center">
            <span>
            YOUR ACCOUNT FOR 
        <br /> EVERYTHING NIKE
          
            </span>
          </div>
          <form>
            <div className="flex flex-col">
              <input required placeholder="email address" className="pl-4 text-sm border text-gray-400 w-96 py-4 mt-4 rounded-md" type="text" />
              <input required placeholder="password" className="pl-4 text-sm border text-gray-400 w-96 py-4 mt-4 rounded-md"  type="password" />
              <span className="text-xs mt-4 text-center text-gray-500">
              By logging in, you agree to Nike's{" "}
                <a
                  href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
                  className="underline"
                >
                 Privacy Policy
                </a>
                and <br />{" "}
                <a
                  href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
                  className="underline"
                >
                    Terms of Use.
                </a>
            
              </span>
              <button className=" mt-4  px-4 py-2 bg-black text-white rounded-md font-extrabold text-base">
                Sign In</button>
              <span className="text-center mt-4 text-xs">
                ??ye de??il misin?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={closeHandleRegister}
                >
                  Bize Kat??l.
                </span>
              </span>
            </div>
          </form>
        </Modal>
        <Modal
          className="Modal"
          isOpen={RegisterModalIsOpen}
          onRequestClose={closeRegister}
          closeTimeoutMS={2000}
          style={customStyles}
          overlayClassName="Overlay"
        >
          <button className="absolute top-2 right-3" onClick={closeRegister}>
            <i class="fa-solid fa-x"></i>
          </button>
          <div className="nike-unite-swoosh">
            <img
              src="https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png"
              alt="nike"
            />
          </div>
          <div className="header-text">
            <span>NIKE ??YES?? OL</span>
          </div>
          <form>
            <div className="register-panel-form">
              <input required placeholder="E-posta adresi" type="text" />
              <input required placeholder="??ifre" type="password" />
              <input required placeholder="Ad??" type="text" />
              <input required placeholder="Soyad??" type="text" />
              <span className="text-center text-xs mt-2 text-gray-400">
                Her y??l Do??um G??n??nde Nike ??ye ??d??l?? kazan.
              </span>
              <input required placeholder="gg/aa/yy" type="date" />
              <SelectCountries />
              <div className="flex gap-4 justify-center mt-4 items-center">
                {Gender}
                <button
                  type="button"
                  onClick={() => setGender(true)}
                  className={`${
                    Gender ? "border-black" : ""
                  } border rounded-md py-2 w-full text-sm px-6`}
                >
                  <i
                    className={`${
                      Gender ? "visible" : "hidden"
                    } fa-solid fa-check`}
                  ></i>{" "}
                  Erkek
                </button>{" "}
                <button
                  type="button"
                  onClick={() => setGender(false)}
                  className={`${
                    Gender ? "" : "border-black"
                  } border rounded-md py-2 text-sm w-full px-6`}
                >
                  <i
                    className={`${
                      Gender ? "hidden" : "visible"
                    } fa-solid fa-check`}
                  ></i>{" "}
                  Kad??n
                </button>
              </div>
              <span className="register-panel-desc">
                Hesap olu??turarak Nike'??n{" "}
                <a
                  href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
                  className="underline"
                >
                  Gizlilik Politikas??
                </a>
                'n?? ve <br />{" "}
                <a
                  href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
                  className="underline"
                >
                  Kullan??m ??artlar??
                </a>
                'n?? kabul etmi?? olursun.
              </span>
              <button className="register-panel-button">B??ZE KATIL</button>
              <span className="text-xs text-center mt-4">
                Zaten ??ye misin?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={closeHandleLogin}
                >
                Sign In
                </span>{" "}
              </span>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default LoginModal;
