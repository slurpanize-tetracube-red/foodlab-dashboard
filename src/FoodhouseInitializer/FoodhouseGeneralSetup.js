import {
    Avatar, Box,
    Button, Container,
    CssBaseline,
    TextField,
    Typography
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useFoodhouseGeneralSetup } from "./FoodhouseGeneralSetupHooks";

function FoodhouseGeneralSetup(props) {

    const { foodhouseSetupCompletedFn } = props;

    const {
        foodhouseName,
        updateName,
        updateDescription,
        submitForm
    } = useFoodhouseGeneralSetup();

    const styles = {
        box: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        paper: {
            minHeight: 140,
            position: "relative",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#008bf2',
            color: '#f2f2f2'
        },
        floatingButton: {
            position: 'absolute',
            bottom: -16,
            right: -16
        },
        avatar: {
            m: 1,
            backgroundColor: 'secondary.main'
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box sx={styles.box}>
                <Avatar sx={styles.avatar}>
                    <SettingsIcon/>
                </Avatar>

                <Typography component="h1" variant="h5">
                    Foodhouse General Setup
                </Typography>

                <Box component="form" onSubmit={(event) => submitForm(event, foodhouseSetupCompletedFn)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="foodhouse-name"
                        label="Your foodhouse name"
                        name="foodhouse-name"
                        autoComplete="email"
                        autoFocus
                        sx={{ mt: 4 }}
                        value={foodhouseName}
                        onChange={updateName}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="foodhouse-description"
                        label="Some note about you"
                        multiline
                        rows={5}
                        id="foodhouse-description"
                        autoComplete="current-password"
                        onChange={updateDescription}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Found Foodhouse
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default FoodhouseGeneralSetup;

/*
   <Paper sx={styles.paper} elevation={3}>
                            {logoImage === null &&
                            <Typography component="h3" variant="h5">
                                Your Logo
                            </Typography>
                            }
                            {logoImage !== null &&
                            <img
                                src={`${URL.createObjectURL(logoImage)}`}
                                alt={'Your logo'}
                                loading="lazy"
                            />
                            }
                        </Paper>
                             <Stack spacing={2}
                               direction="row"
                               justifyContent="center"
                               alignItems="center">
                            <Button color="primary" aria-label="edit" variant="outlined" sx={{mt: 1}}>
                                <EditIcon/>
                                <label htmlFor={'foodhouse-logo'}>
                                    Upload your logo
                                </label>
                            </Button>
                        </Stack>
                        <InputBase
                            fullWidth
                            id="foodhouse-logo"
                            name="foodhouse-logo"
                            type="file"
                            accept="image/*"
                            sx={{display: "none"}}
                            onChange={previewLogo}
                        />
                            const previewLogo = (event) => {
        console.debug(event.nativeEvent.target.files);
        const [ file ] = event.nativeEvent.target.files;
        if (file) {
            setLogoImage(file);
        }
    };
 */