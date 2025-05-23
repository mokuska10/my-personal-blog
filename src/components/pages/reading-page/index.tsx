import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './style.css';
import { data as thougtsData} from '../../data/my-thoughts-data';
import { data as politicsData } from '../../data/politics-page-data';
import FloatingBtn from '../../floating-home-button';

const ReadingPage: React.FC = () => {

    const { id } = useParams<{ id:string }>()
    const location = useLocation()
    const dataId = Number(id)

    const section = location.pathname.split("/")[1]

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sourceData: any[] = []

    switch (section) {
        case "ganduri":
            sourceData = thougtsData
            break
        case "politica":
            sourceData = politicsData
            break
        default:
            sourceData = []
    }

    const post = sourceData.find(p => p.id === dataId)

    if (!post) return <p>Post not found</p>

    return (
            <div className="post-wrapper">
                <FloatingBtn />
                <div key={post.id} className="post-container">
                    <img src={post.landscapeImage} className="header-img"/>
                    <h2>{post.title}</h2>
                    <p>{post.content[0]}</p>
                    <p>{post.content[1]}</p>
                    <div className="post-footer">
                        <span>{post.readingTime} |</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
    )
}

export default ReadingPage;