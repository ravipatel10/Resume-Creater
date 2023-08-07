import React, { useContext } from 'react'
import { Box, Text, Image, Heading, Badge } from '@chakra-ui/react';
import './theme2.css'
import ResumeContext from '../../Context/ResumeContext';
import { useRef } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { useState } from 'react'
import { useEffect } from 'react'
import DraggableSection from '../../Components/DragAndDrop/DraggableSection'

const Theme2 = (props) => {

    const componentRef = useRef();

    const { checkProfile, checkProj, checkWork, checkAward, themeData, checkLinkedin, checkGithub } = useContext(ResumeContext)
    const { name, address, phone, email, profile, profileImage, summary, skill, linkedinUrl, githubUrl } = themeData.personalData;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    const initialSectionData = [
        {
            id: 'education-area', content: (
                <Box id='education-area'>
                    <Heading fontSize='2xl' className='my-2'>Education</Heading>
                    {
                        Object.entries(educationTitles).map((element, index) => {
                            return (
                                <Box key={index} className="mt-3">
                                    <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                    <Box className='sub-details'>
                                        {
                                            (Object.entries(educationDesc)[index] === undefined)
                                                ?
                                                null
                                                :
                                                Object.entries(educationDesc)[index][1].split(',').map((element, index) => {
                                                    return <li key={index}>{element}</li>
                                                })
                                        }
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>

            )
        },
        {
            id: 'project-area', content:
                checkProj ? null : (
                    <Box id='project-area'>
                        <Heading fontSize='2xl' className='mt-4'>Projects</Heading>
                        {
                            Object.entries(projectTitles).map((element, index) => {
                                return (
                                    <Box key={index} className="mt-1">
                                        <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                        <Box className='sub-details'>
                                            {
                                                (Object.entries(projectDesc)[index] === undefined)
                                                    ?
                                                    null
                                                    :
                                                    Object.entries(projectDesc)[index][1].split(',').map((element, index) => {
                                                        return <li key={index}>{element}</li>
                                                    })
                                            }
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>)
        },
        {
            id: 'experience-area', content: 
                checkWork ? null : (
                    <Box id='experience-area'>
                        <Heading fontSize='2xl' className='mt-4'>Work Experience</Heading>
                        {
                            Object.entries(workTitles).map((element, index) => {
                                return (
                                    <Box key={index} className="mt-1">
                                        <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                        <Box className='sub-details'>
                                            {
                                                (Object.entries(workDesc)[index] === undefined)
                                                    ?
                                                    null
                                                    :
                                                    Object.entries(workDesc)[index][1].split(',').map((element, index) => {
                                                        return <li key={index}>{element}</li>
                                                    })
                                            }
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>)
        },
        {
            id: 'award-area', content: 
                checkAward ? null : (
                    <Box id='award-area'>
                        <Heading fontSize='2xl' className='mt-4'>Awards & Achievement</Heading>
                        <Box className='mt-1'>
                            {
                                awards.split(',').map((element, index) => {
                                    return <li key={index}>{element}</li>
                                })
                            }
                        </Box>
                    </Box>)
        }
    ]

    const [sections, setSections] = useState(initialSectionData);


    const handleDrop = (draggedId, droppedId) => {

        setSections((prevSections) => {

            const updatedSections = prevSections.map((section) => ({ ...section }));
            const draggedIndex = updatedSections.findIndex((section) => section.id === draggedId);
            const droppedIndex = updatedSections.findIndex((section) => section.id === droppedId);

            if (draggedIndex === -1 || droppedIndex === -1) {
                return prevSections;
            }

            [updatedSections[draggedIndex], updatedSections[droppedIndex]] = [
                updatedSections[droppedIndex],
                updatedSections[draggedIndex],
            ];

            return [...updatedSections];
        });
    };

    useEffect(() => {

        const updatedSections = [...initialSectionData];
        setSections(updatedSections);

    }, [themeData]);


    return (
        <Box id="section-to-print" ref={componentRef} style={{ backgroundColor: 'white', color: 'black' }}>
            <Box id="theme2">
                <header id='info' className='text-center m-2 d-flex justify-content-between align-items-center'>
                    <Box className='info-text text-start'>
                        <Heading as='h2' size='xl' className='mb-2'>
                            {name}
                        </Heading>
                        <Text fontWeight={'500'} fontSize='xl' className='mt-1 mb-2'>
                            {profile}
                        </Text>
                        <Text width={'400px'} fontSize='sm' className='mt-1 mb-2 summary-text'>
                            {summary}
                        </Text>
                    </Box>
                    {!checkProfile && <Box className='mx-2 mb-2'>
                        <Image id='resume-avatar' borderRadius={100} boxSize={'150px'} src={profileImage} alt='Profile Picture' />
                    </Box>}
                </header>
                <div className="w-100 border border-dark m-auto"></div>
                <section className='bottom-part d-flex mt-3'>
                    <section className='partition-1'>
                        <Box>
                            <Heading fontSize='2xl' className='my-2'>Contact</Heading>
                            <Box className='mt-3'>
                                <Heading fontSize='md' className='my-2'>Phone</Heading>
                                <Text fontSize={'sm'}>{phone}</Text>
                                <Heading fontSize='md' className='my-2'>Email</Heading>
                                <Text fontSize={'sm'}><a href={`mailto:${email}`}>{email}</a></Text>
                                <Heading fontSize='md' className='my-2'>Address</Heading>
                                <Text width={'190px'} fontSize={'sm'}>{address}</Text>
                                {!checkLinkedin ? <span className='my-2 mb-1'><BsLinkedin className='d-inline mx-1' /><a href={linkedinUrl}>Linkedin</a></span> : null}
                                <br />
                                {!checkGithub ? <span className='my-2 mt-2'><BsGithub className='d-inline mx-1' /><a href={githubUrl}>Github</a></span> : null}
                            </Box>
                        </Box>
                        <Box className='mt-5'>
                            <Heading fontSize='2xl' className='my-2'>Skills</Heading>
                            <Box className='mt-3'>
                                {
                                    skill.split(',').map((element, index) => <li key={index} className='mx-2' variant='solid'>{element}</li>)
                                }
                            </Box>
                        </Box>
                    </section>

                    <div style={{ height: '650px' }} className="border border-dark mx-3 ml-1"></div>

                    <section className='partition-2'>

                    {sections.map((section) => (
                        (section.id === 'project-area' && checkProj) ||
                            (section.id === 'experience-area' && checkWork) ||
                            (section.id === 'award-area' && checkAward) ? null :
                            <DraggableSection
                                key={section.id}
                                onDrop={(draggedId) => handleDrop(draggedId, section.id)}
                                sectionId={section.id}
                            >
                                    {section.content}
                                </DraggableSection>
                       ))}

                    </section>
                </section>
            </Box>
        </Box>
    )
}

export default Theme2