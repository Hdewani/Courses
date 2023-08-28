'use client'

import { gql, useQuery } from '@apollo/client'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const sampleData = {
    "id": "64e992860d1acad7a22d3dc7",
    "title": "Atomic Habits",
    "description": "Atomic Habits: the life-changing million-copy",
    "author": "James Clear",
    "totalModules": 0
}

const ALL_COURSES_QUERY = gql`
query AllCourses {
  getAllCourses {
    id
    title
    description
    author
    totalModules
    
  }
}
`

function coursePage() {
    const { data, loading, error } = useQuery
        <{ getAllCourses: typeof sampleData[] }>
        (ALL_COURSES_QUERY)

    return (
        <Stack direction={'column'} spacing={2}>
            {loading && <div>Loading...</div>}
            {data?.getAllCourses.map((course) => {
                return (
                    <Stack key={course.id}>
                        <Typography variant='h5'>
                            {course.title}
                        </Typography>
                        <Typography variant='h5'>
                            {course.description}
                        </Typography>
                        <Typography variant='h5'>
                            {course.author}
                        </Typography>
                        <Typography variant='h5'>
                            {course.totalModules}
                        </Typography>
                    </Stack>
                );
            })}
        </Stack>
    );
}

export default coursePage
