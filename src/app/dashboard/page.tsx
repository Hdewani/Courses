"use client"

import { useQuery } from '@apollo/client'
import { Stack, Typography } from '@mui/material'
import { HelloDocument, HelloQuery, useHelloQuery } from '@sasta_udemy/generated/graphql'
import React from 'react'

function DashBoradPage() {
    const { data, loading, error } = useHelloQuery()
    return (
        <Stack>
            DashboardPage
            <Typography>
                {data?.hello}
            </Typography>
        </Stack>
    )
}

export default DashBoradPage
