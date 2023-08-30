"use client"
import { Box, Button, TextField, Typography } from '@mui/material'
import { User, useLoginLazyQuery } from '@sasta_udemy/generated/graphql'
import { log } from 'console'
import React, { useCallback, useState } from 'react'

const LoginPage = () => {
    const [loginQuery, { data, loading, error }] = useLoginLazyQuery()
    const [user, setUser] = useState<User>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onsubmit = useCallback(() => {
        console.log(email, password);
        console.log("Error:", error);


        loginQuery({
            variables: {
                email,
                password,
            },
        })
            .then(({ data }) => {
                if (data?.login.__typename === 'LoginDoc') {
                    setUser(data.login.user)
                }

                if (
                    data?.login.__typename === 'BadUserInputError' ||
                    data?.login.__typename === 'InternalServerError' ||
                    data?.login.__typename === 'NotFoundError'
                ) {
                    console.log(data.login.message);

                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [email, password, loginQuery]);

    return (
        <div>
            <form>
                <Box sx={{
                    borderColor: 'secondary.main',
                    border: 2,
                    backgroundColor: 'white',
                }}
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    borderRadius={6}
                    boxShadow={"10px 20px 30px #9C27B0 "}
                >
                    <Typography variant='h3' color="black" padding={3} textAlign={"center"} margin='normal' >Login</Typography>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        type='text'
                        margin='normal'
                        color='secondary'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        type='text'
                        margin='normal'
                        color='secondary'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button sx={{ marginTop: 4, borderRadius: 2 }} variant="contained" color="secondary"
                        onClick={onsubmit}
                    >Login</Button>
                </Box>
            </form>

            {loading && <div>Loading...</div>}
            {error && (
                <div>
                    <Typography variant="body1" color="error">
                        An error occurred: {error.message}
                    </Typography>
                </div>
            )}
            {user && (
                <div>
                    <Typography variant="h4">
                        Welcome to the application, {user.name}
                    </Typography>
                </div>
            )}

        </div>


    )
}


export default LoginPage
