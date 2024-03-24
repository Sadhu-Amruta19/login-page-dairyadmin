import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
    Paper,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        // if (!name || !email || !password) {
        //     alert("Please fill in all fields.");
        //     return;
        // }
        if (!name) {
            alert("Please fill in the name field.");
            return;
        }else if (!email) {
            alert("Please fill in the email field.");
            return; 
        }else if (!password) {
            alert("Please fill in the password field.");
            return;
        }
        
    };

    return (
        <>
            <Box
                sx={{
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Set the gradient colors and direction
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Paper elevation={3} sx={{ padding: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                                <LockOutlined />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Register
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="name"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            autoFocus
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3 }}
                                    onClick={handleRegister}
                                >
                                    Register
                                </Button>
                                <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                                    <Grid item>
                                        <Link to="/login">Already have an account? Login</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};

export default Register;









// import {
//     Avatar,
//     Box,
//     Button,
//     Container,
//     CssBaseline,
//     Grid,
//     TextField,
//     Typography
// } from "@mui/material";
//   import { LockOutlined } from "@mui/icons-material";
//   import { useState } from "react";
//   import { Link } from "react-router-dom";
  
//   const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const handleRegister = async () => {};
  
//     return (
//       <>
//         <Container maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               mt: 20,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
//               <LockOutlined />
//             </Avatar>
//             <Typography variant="h5">Register</Typography>
//             <Box sx={{ mt: 3 }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     name="name"
//                     required
//                     fullWidth
//                     id="name"
//                     label="Name"
//                     autoFocus
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </Grid>
  
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={handleRegister}
//               >
//                 Register
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <Link to="/login">Already have an account? Login</Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//       </>
//     );
//   };
  
//   export default Register;