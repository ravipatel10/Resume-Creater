import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import Editor from '../../Editor/Editor';
import './print.css';
import ResumeContext from '../../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";
import Theme1 from '../../Theme/Theme1/Theme1';
import Theme2 from '../../Theme/Theme2/Theme2';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Footer from '../../Components/Footer/Footer';

const Print = (props) => {
    const { showComponent, setShowComponent, loading } = useContext(ResumeContext);

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent);
    };

    const componentRef = useRef();

    const themeComponents = {
        'theme1': <Theme1 />,
        'theme2': <Theme2 />,
    };

    const selectedThemeComponent = themeComponents[props.theme];

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <Editor />
                <div id='theme-box-border' ref={componentRef}>
                    {selectedThemeComponent}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>Print</Button>
                <Link to="/templates"><Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'}>Select Another Template</Button></Link>
            </div>
            <Footer />
        </>
    );
};

const PrintWithForwardRef = React.forwardRef((props, ref) => {
    return <Print {...props} componentRef={ref} />
});

export default PrintWithForwardRef;
