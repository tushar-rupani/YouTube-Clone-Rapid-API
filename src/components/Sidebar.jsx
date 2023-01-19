import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../utils/constants'
const Sidebar = ({selectCategory, setSelectCategory}) => {
  return (
    <Stack
    direction="row"
    sx = {{flexDirection: {md : "column"}, overflowY: "auto", height: {sx: "auto", md: "95%"}}}>
        {categories.map((category) => (
            <button className='category-btn' key={category.name} style={{backgroundColor: category.name === selectCategory && "#FC1503", color: "white"}} onClick={() => setSelectCategory(category.name)}>
                <span style={{marginRight: "15px", color: category.name === selectCategory ? "white" : "red"}}>{category.icon}</span>
                <span style={{opacity: category.name === selectCategory ? "1" : "0.7"}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar
