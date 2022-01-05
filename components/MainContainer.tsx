import React from 'react'

import Container from '@mui/material/Container'


export default function MainContainer({children}) {
    
    return (
        <Container maxWidth='lg'>
            {children}
        </Container>
    )
}
