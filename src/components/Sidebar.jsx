import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack direction={"row"} sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" },background: "white", flexDirection: { md: "column" } }}>
        {categories.map(category => {
            return (
                <button onClick={() => setSelectedCategory(category.name)} className='category-btn' style={{ background: category.name === selectedCategory && "#717572", color: "black" }}>

                    <span style={{ color: category.name === selectedCategory ? "white" : "#717572", marginRight: "15px" }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
                </button>
            )
        })}
    </Stack>
)

export default Sidebar