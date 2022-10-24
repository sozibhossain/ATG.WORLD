import React from 'react';
import AllPosts from '../AllPosts/AllPosts';
import Banner from '../Banner/Banner';
import PostsMenu from '../PostsMenu/PostsMenu';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <PostsMenu></PostsMenu>
            <AllPosts></AllPosts>
        </div>
    );
};

export default Home;