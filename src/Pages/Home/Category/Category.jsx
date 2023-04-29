import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import News from '../../News/News/News';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();

    const categories = useLoaderData()
    return (
        <div>
            {id && <h1>This is A Category{categories.length}</h1>}
            <div>
                {
                    categories.map(news => <NewsCard
                        key={news._id}
                        news={news}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Category;