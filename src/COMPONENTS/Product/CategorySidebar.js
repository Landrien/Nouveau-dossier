import React from 'react'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/5.png'
import img6 from '../../ASSETS/Images/6.png'
import img7 from '../../ASSETS/Images/7.png'
import img8 from '../../ASSETS/Images/8.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Categorie 1'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Categorie 2'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Categorie 3'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Categorie 4'
        },
        {
            id: 5,
            categoryimage: img5,
            categoryname: 'Categorie 5'
        },
        {
            id: 6,
            categoryimage: img6,
            categoryname: 'Categorie 6'
        },
        {
            id: 7,
            categoryimage: img7,
            categoryname: 'Categorie 7'
        },
        {
            id: 8,
            categoryimage: img8,
            categoryname: 'Categorie 8'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar