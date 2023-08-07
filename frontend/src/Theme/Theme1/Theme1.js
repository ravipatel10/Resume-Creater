import React, { useContext, useRef } from 'react'
import { Heading, Text, Box, Badge } from '@chakra-ui/react'
import './theme1.css'
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import ResumeContext from '../../Context/ResumeContext';
import DraggableSection from '../../Components/DragAndDrop/DraggableSection'
import { useState } from 'react'
import { useEffect } from 'react'

const Theme1 = (props) => {

    const { checkProj, checkWork, checkAward, checkLinkedin, checkGithub, themeData, componentRef } = useContext(ResumeContext)

    const { name, profile, address, phone, email, linkedinUrl, githubUrl, skill } = themeData.personalData;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;


    const initialSectionData = [
        {
            id: 'info', content: (
                <header id='info' className='text-center mt-2'>
                    <Heading as='h2' size='2xl' className='mb-2'>
                        {name}
                    </Heading>
                    <Text fontSize='md' className='text-muted my-1 '>
                        <span className='mx-2'><ImLocation className='d-inline mx-1' />{address}</span>|
                        <span className='mx-2'><GrMail className='d-inline mx-1' /><a href={`mailto:${email}`}>{email}</a></span>|
                        <span className='mx-2'><BsFillTelephoneFill className='d-inline mx-1' />{phone}</span>|
                        {!checkLinkedin ?
                            <span className='mx-2'><BsLinkedin className='d-inline mx-1' /><a href={linkedinUrl} target='_blank'>Linkedin |</a></span> : null}
                        {!checkGithub ?
                            <span className='mx-2'><BsGithub className='d-inline mx-1' /><a href={githubUrl} target='_blank'>Github </a></span> : null
                        }
                    </Text>
                    <Heading as='h3' size='md' className='mt-1 mb-2'>
                        {profile}
                    </Heading>
                </header>)

        },
        {
            id: 'skills', content: (
                <section id="skills" className='my-2'>
                    <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                        TECHNICAL SKILLS
                    </Heading>

                    <Box id='skills-set' className='basic-set d-flex justify-content-center align-items-center'>
                        <Box className='skillBox'>
                            {
                                skill.split(',').map((element, index) => <Badge key={index} className='skill-badge' variant='solid'>{element}</Badge>)
                            }
                        </Box>
                    </Box>
                </section>)

        },
        {
            id: 'projects', content:
                checkProj ? null : 
                    <section id="projects" className='my-2'>
                        <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            PROJECTS
                        </Heading>

                        <Box id='project-set' className='basic-set'>
                            {
                                Object.entries(projectTitles).map((element, index) => {
                                    return (
                                        <Box key={index} className="subBox">
                                            <Text className='sub-title'>{element[1]}</Text>
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
                        </Box>
                    </section>

        },
        {
            id: 'education', content:
                (<section id="education" className='my-2'>
                    <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                        EDUCATION
                    </Heading>

                    <Box id='education-set' className='basic-set'>
                        {
                            Object.entries(educationTitles).map((element, index) => {
                                return (
                                    <Box key={index} className="subBox">
                                        <Text className='sub-title'>{element[1]}</Text>
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
                </section>)

        },
        {
            id: 'experience', content:
                checkWork ? null : 
                    <section id="experience" className='my-2'>
                        <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            WORK EXPERIENCE
                        </Heading>

                        <Box id='experience-set' className='basic-set'>
                            {
                                Object.entries(workTitles).map((element, index) => {
                                    return (
                                        <Box key={index} className="subBox">
                                            <Text className='sub-title'>{element[1]}</Text>
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
                        </Box>
                    </section>
        },

        {
            id: 'awards', content:
                checkAward ? null : 
                    <section id="awards" className='my-2'>
                        <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            AWARDS & ACHIEVEMENTS
                        </Heading>

                        <Box id='award-set' className='basic-set d-flex justify-content-between align-items-center'>
                            <Box>
                                {
                                    awards.split(',').map((element, index) => {
                                        return <li key={index}>{element}</li>
                                    })
                                }
                            </Box>
                        </Box>
                    </section>
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
        <>
            <Box id="section-to-print" ref={componentRef} style={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }} >
                <Box _dark={{ border: '1px solid white' }} id="theme1">
                    {sections.map((section) => (
                        (section.id === 'projects' && checkProj) ||
                            (section.id === 'experience' && checkWork) ||
                            (section.id === 'awards' && checkAward) ? null :
                            <DraggableSection
                                key={section.id}
                                onDrop={(draggedId) => handleDrop(draggedId, section.id)}
                                sectionId={section.id}
                            >
                                {section.id === 'info' && (
                                    <header id='info' className='text-center mt-2'>
                                        <Heading as='h2' size='2xl' className='mb-2'>
                                            {name}
                                        </Heading>
                                        <Text fontSize='md' className='text-muted my-1 '>
                                            <span className='mx-2'><ImLocation className='d-inline mx-1' />{address}</span>|
                                            <span className='mx-2'><GrMail className='d-inline mx-1' /><a href={`mailto:${email}`}>{email}</a></span>|
                                            <span className='mx-2'><BsFillTelephoneFill className='d-inline mx-1' />{phone}</span>|
                                            {!checkLinkedin && (
                                                <span className='mx-2'>
                                                    <BsLinkedin className='d-inline mx-1' />
                                                    <a href={linkedinUrl} target='_blank'>Linkedin |</a>
                                                </span>
                                            )}
                                            {!checkGithub && (
                                                <span className='mx-2'>
                                                    <BsGithub className='d-inline mx-1' />
                                                    <a href={githubUrl} target='_blank'>Github </a>
                                                </span>
                                            )}
                                        </Text>
                                        <Heading as='h3' size='md' className='mt-1 mb-2'>
                                            {profile}
                                        </Heading>
                                    </header>
                                )}

                                {/* Render other sections */}
                                {section.id !== 'info' && section.content}

                            </DraggableSection>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default Theme1;
