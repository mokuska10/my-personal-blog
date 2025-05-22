import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { data } from '../../data/data';

const ReadingPage: React.FC = () => {

    const { id } = useParams<{ id:string }>()
    const dataId = Number(id)
    const post = data.find(p => p.id === dataId)

    if (!post) return <p>Post not found</p>

    return (
            <div className="post-wrapper">
                <div key={post.id} className="post-container">
                    <img src={post.landscapeImage} className="header-img"/>
                    <h2>{post.title}</h2>
                    <p>{post.content[0]}</p>
                    <p>{post.content[1]}</p>
                    <div className="post-footer">
                        <span>{post.readingTime}</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
    )
}

export default ReadingPage;