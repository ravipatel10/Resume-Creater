import './contact.css';
import React, { useState } from 'react';
import { Box, Heading, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Email sent successfully');
        } else {
          console.error('Error sending email:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setEmail('');
    setMessage('');
  };
  
  return (
    <Box py={8} px={4} maxWidth="600px" margin="auto">
      <Heading as="h1" size="xl" mb={6}>
        Contact Us
      </Heading>
      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Box>
        <Box mb={4}>
          <Textarea
            placeholder="Write your message here..."
            value={message}
            onChange={handleMessageChange}
            required
          />
        </Box>
        <Button type="submit" colorScheme="teal">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
