import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInSights from '../../News/EditorsInSights/EditorsInSights';

const LeftSideNav = () => {


    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (
        <div>
            <h4 className='fs-2'>All Category</h4>
            <div className='ms-4 mt-3'>
                {
                    categories.map(category => <p
                            key={category.id}
                        >
                            <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>

                        </p>
                    )
                }
            </div>
            <EditorsInSights></EditorsInSights>
        </div>
    );
};

export default LeftSideNav;