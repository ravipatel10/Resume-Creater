import React, { useContext } from "react";
import ResumeContext from "../../Context/ResumeContext";
import ThemeTemplateData from "../../db/ThemeTemplateData";
import "./template.css";
import { Link } from "react-router-dom";

function Templates(props) {
    const { setCurrentTheme, showComponent, setShowComponent } = useContext(
        ResumeContext
    );

    const showTheme = (e) => {
        setShowComponent(!showComponent);
        setCurrentTheme(e.target.id);
    };

    return (
        <>
            <h1 className="heading">
                    Select a{" "}
                    <span>
                        Template{" "}
                    </span>
                    from the list
            </h1>

            <div className="templatesList">
                {ThemeTemplateData.map((item, index) => (
                    <div
                        key={index}
                        className="template"
                        onClick={showTheme}
                        id={item.id}
                    >
                       <Link to={item.to}> <img src={item.imageSrc} alt={item.imageAlt} /> </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Templates;
