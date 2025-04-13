import React from 'react';
import {
  ThemeProvider,
  createTheme,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Snackbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css';

const jellyfishTheme = createTheme({
  palette: {
    primary: {
      main: '#7F5AF0',
    },
    secondary: {
      main: '#2CB67D',
    },
    background: {
      default: '#16161a',
      paper: '#242629',
    },
    text: {
      primary: '#fffffe',
      secondary: '#94a1b2',
    },
  },
  typography: {
    fontFamily: 'Comic Sans MS, sans-serif',
  },
});

function App() {
  const [open, setOpen] = React.useState(false);
  const [quizAnswer, setQuizAnswer] = React.useState('');
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuizChange = (event) => {
    setQuizAnswer(event.target.value);
  };

  const handleQuizSubmit = () => {
    if (quizAnswer) {
      setQuizSubmitted(true);
    }
  };

  const getQuizResult = () => {
    switch (quizAnswer) {
      case 'a':
        return "You're a Moon Jelly; calm, graceful, and a total vibe. 🌙💕";
      case 'b':
        return "You're a Box Jelly; powerful, mysterious, and not to be messed with! 📦⚡";
      case 'c':
        return "You're a Comb Jelly; sparkly, flashy, and living your best aesthetic. 💅✨";
      default:
        return '';
    }
  };

  return (
    <ThemeProvider theme={jellyfishTheme}>
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Card style={{ borderRadius: '16px', padding:'10px' }}>
          
          <CardContent>
            <Typography variant="h4" gutterBottom>
              🪼 Join the JellySquad
            </Typography>
            <Typography variant="body1" gutterBottom>
              Get splashy updates from under the sea.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your glowing email"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleClick}
                >
                  Dive In
                </Button>
              </Grid>
            </Grid>

            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message="You’ve joined the jelly pod! 🪼"
            />

            <Accordion style={{ marginTop: '2rem' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>🧠 Fun Jellyfish Fact!</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Jellyfish have been around for over 500 million years, longer than dinosaurs!
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* JellyMood Meter */}
            <Typography variant="h6" style={{ marginTop: '2rem' }}>
              🌊 What's your ocean mood today?
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={10}>
                <input
                  type="range"
                  min="0"
                  max="10"
                  style={{ width: '100%' }}
                  onChange={(e) => console.log("Mood level:", e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2">🥰</Typography>
              </Grid>
            </Grid>

            {/* JellyGallery */}
            <Typography variant="h6" style={{ marginTop: '2rem' }}>
              📸 JellyGallery
            </Typography>
            <Grid container spacing={2}>
              {[
                {
                  src: 'https://static.scientificamerican.com/sciam/cache/file/B7E980C5-B182-4A2E-80369F2AC535EB35_source.jpg?crop=16%3A9%2Csmart&w=1920',
                  caption: 'Deep sea wanderer',
                },
                {
                  src: 'https://images.theconversation.com/files/513157/original/file-20230302-28-r91z9l.jpg?ixlib=rb-4.1.0&rect=10%2C0%2C6699%2C4466&q=45&auto=format&w=926&fit=clip',
                  caption: 'Glowing beauty',
                },
              ].map((item, idx) => (
                <Grid item xs={6} key={idx}>
                  <Card>
                    <img
                      src={item.src}
                      alt={item.caption}
                      style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="caption">{item.caption}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* JellyQuiz */}
            <Typography variant="h6" style={{ marginTop: '2rem' }}>
              🧠 Which jellyfish are you?
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Pick your vibe:</FormLabel>
              <RadioGroup value={quizAnswer} onChange={handleQuizChange}>
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label="You go with the flow, love calm waters and late-night snacks."
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label="You’re fierce, efficient, and love a good challenge."
                />
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label="You shine bright and leave trails of sparkle wherever you go."
                />
              </RadioGroup>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: '1rem' }}
                onClick={handleQuizSubmit}
                disabled={!quizAnswer}
              >
                Reveal My Jelly Type!
              </Button>
            </FormControl>

            {quizSubmitted && (
              <Typography
                variant="body1"
                style={{ marginTop: '1rem', color: '#2CB67D' }}
              >
                {getQuizResult()}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
