import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {

    const githubUrl = process.env.REACT_APP_GITHUB_URL;
    const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;


    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                textAlign={'center'}
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text> <b> Note: </b> You can drag and drop the elements, but after dropped that element, when you do some changes, the elements will return back to the original position. So, use this feature after filling all the data and then drag and drop the elements and then print your Resume 🎉</Text>
                <br />
                <Text>© 2023 Resume Creater, All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Github'} href={githubUrl}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'LinkedIn'} href={linkedinUrl}>
                        <FaLinkedin />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}
