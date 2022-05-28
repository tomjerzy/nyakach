/** @jsx jsx */
import React, { useState } from 'react';
import { Heading, Image, Box, Link, Container, jsx,Grid,Input,Button,IconButton,Flex, Text} from 'theme-ui';
import { FaPhoneAlt,FaMailBulk,FaMapPin } from 'react-icons/fa';

export default function TeamCard({ src, altText, title, designation, social }) {
  const [disabled, setDisabled] = useState(false)
  const [dta, setDta] = useState({
    name: 'Your name',
    message: 'Your message...'
  })
  const items = [
    { path: 'mailto:contact@youngchange.com',text: 'contact@nyakachyouth.com', icon: <FaMailBulk/>},
    { path: 'tel:+254713635173',text:'+254713635173', icon: <FaPhoneAlt />},
    { path: 'www.maps.google.com', text: 'Nyakach sub county', icon: <FaMapPin />}
    
  ]
  const sendComment = () => {
    alert('Database connection closed')
      setDisabled(true)
  }
  return (
    <section id="contact">
      <Container sx={{backgroundColor: '#e5e4e2', borderRadius: 5}} py="30px">
                    <Grid sx={styles.grid} mb="30px">
                      <Box>
                      <Heading variant="heroPrimary" as="h4">
                        Contact Us
                      </Heading>
                      <Text sx={{color: 'grey'}}>Need to get in touch? Either fill the form or use below contact details to reach us</Text>
                        {items.map((item) => (
                          <Flex>
                            <Link href={item.path} sx={styles.link}>
                                <IconButton aria-label="list icon" mr="20px" sx={{ color: 'primary'}}>
                                {item.icon}
                              </IconButton>
                              {item.text}
                            </Link>
                         
                            </Flex>
                        ))}
                   
                      </Box>
                      <Box>
                          <Flex>
                            <input placeholder='First name' max={20} style={styles.input}/>
                            <input placeholder='Last name' maxLength={20} style={styles.input}/>
                          </Flex>
                        <Box>
                          <input placeholder='Email address' type="email" maxLength={20} style={styles.input}/>
                        </Box>
                        <Box>
                         <textarea placeholder='What can we help with?' maxLength={200} rows="4" cols="50" style={styles.input}/> 
                        </Box>
                        
                        <Button variant="secondary" onClick={sendComment} disabled={disabled}>Send</Button>
                      </Box>
                    </Grid>
       
        </Container>
    </section>
  );
}

const styles = {
  input: {
    backgroundColor: '#cecece',
    border: 'none',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ]
  },
  link: {
    fontSize: [1, '15px'],
    color: 'text',
    fontWeight: '400',
    mb: 2,
    cursor: 'pointer',
    transition: 'all 0.35s',
    display: 'block',
    textDecoration: 'none',
    lineHeight: [1.5, null, 1.8],
    px: [2, null, 4],
    ':hover': {
      color: 'primary',
    },
  },
};
