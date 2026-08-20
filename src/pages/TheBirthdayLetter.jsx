import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Happy Birthday, Vett!</p>
                    <p>
                        Here's a compilation of letters for you from your mama lu and enfini7y peeps!
                    </p>
                    <p>
                        You're the prettiest when you're happy, love you!
                    </p>
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>ENFINI7Y</p>
                </div>
            </div>

            <div className="title">
                <p>needs more?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/dos.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Dos</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/jam.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Jam</span>
                </button>
            </div>
            
             <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/ashy.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Ashy</span>
                </button>
                 <button className="img-button" onClick={() => openPopup("img/mayi.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Mayi</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/gwi.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Gwi</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/luca.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Luca</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/maui.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Maui</span>
                </button>
            </div>

             <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/niah.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Niah</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/denine.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Denine</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/ghea.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">Ghea</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
