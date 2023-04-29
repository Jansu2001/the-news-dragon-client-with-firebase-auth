import moment from 'moment/moment';
import React, { useContext } from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { AuthContext } from '../../../Providers/AuthProvider';
import PrivateRoute from '../../../Providers/PrivateRoute';


const NewsCard = ({ news }) => {
    const {user}=useContext(AuthContext)

    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <div>
            <Card className=" mb-4 ">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    {/* <div> */}

                    <div className='ps-2 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p ><small>{moment(author?.published_date).format('yyy-MM-D')} </small></p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>

                    </div>

                    {/* </div> */}

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</>
                            :
                            <>
                                {details.slice(0, 250)}....
                                <Link to={`/news/${_id}`}>Read More</Link>
                            </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">

                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                        <span className='ms-2'>{rating?.number}</span>
                    </div>

                    <div>
                        <FaEye className='me-1'></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;