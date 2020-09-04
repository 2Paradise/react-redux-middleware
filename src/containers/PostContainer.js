import React, {useEffect} from 'react';
import Post from "../components/Post";
import {useDispatch, useSelector} from "react-redux";
import {getPost, goToHome, printState} from "../modules/posts";
import {reducerUtils} from "../lib/asyncUtils";

function PostContainer({postId}) {
    const { data, loading, error } = useSelector(state => state.posts.post[postId] || reducerUtils.initial());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if(loading && !data) return <div>Loading Post..</div>;
    if(error) return <div>Error...</div>;
    if(!data) return null;

    return (
        <>
            <button onClick={() => dispatch(printState())}>상태출력 </button>
            <button onClick={() => dispatch(goToHome())}>Home 으로 이동</button>
            <Post post={data} />
        </>
    );
}

export default PostContainer;