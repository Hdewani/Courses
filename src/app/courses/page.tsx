"use client"

import { Stack, Typography } from '@mui/material';
import { GetAllCoursesDocument, useGetAllCoursesQuery } from '@sasta_udemy/generated/graphql'
import React from 'react'

function CoursesPage() {
    const { data, loading, error } = useGetAllCoursesQuery()
    return (
        <Stack direction={'column'} spacing={2}>
            {loading && <div>Loading...</div>}
            {data?.getAllCourses?.map((course) => {
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

export default CoursesPage
