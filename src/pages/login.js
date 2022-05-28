/** @jsx jsx */
import React, { useState } from 'react';
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading, Button, Link} from 'theme-ui';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import LoginImg from 'assets/login.png';

export default function Login() {
    const [disabled, setDisabled] = useState(false)
    const login = () => {
        setDisabled(true)
        alert('Database connection closed')
    }
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      {/* <SEO title="Nyakach" /> */}
      <section sx={styles.workflow}/>
      <Container sx={{backgroundColor: '#e5e4e2', borderRadius: 5}} py="30px">
      <Grid sx={styles.grid} mb="30px">
            <Box>
                <Image src={LoginImg}/>
            <Heading variant="heroPrimary" as="h4">
                Sign in
            </Heading>
            <Text sx={{color: 'grey'}}>
                Login to access admin controls
                </Text>
            </Box>
            <Box>
                <Heading as="h5" mb="15px">Sign with your email and password to proceed</Heading>
                <label for="email">Email:</label>
                <input placeholder='Email address' maxlength="30" id="email" type="email" style={styles.input}/>
                <label for="pwd">Password:</label>
                <input placeholder='Password' id="pwd" maxlength="20" type="password" style={styles.input}/>
            <Button variant="secondary" mb="20px" onClick={login} disabled={disabled}>Sign in</Button>
            
        <Link href="/" sx={styles.link}><Text>Forgot password?</Text></Link>
        <Link href="/" sx={styles.link}><Text>Don't have an account? Reach out to admin for registration.</Text></Link>
            </Box>
        </Grid>
          </Container>
      </Layout>
      </ThemeProvider>
 
  );
}

const styles = {
  workflow: {
      backgroundColor: '#fff',
    py: [7, null, 9, null, null, 7],
  },

  input: {
    backgroundColor: '#cecece',
    border: 'none',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    margin: 10,
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
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    px: '30px',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
};
