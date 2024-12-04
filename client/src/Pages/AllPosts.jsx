import { useState, useEffect } from 'react';
import { Box, InputBase, Button, styled, Card, CardContent, Typography } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Header from '../components/Header';
import { getAllPosts } from '../services/api';

const SearchContainer = styled(Box)({
    marginTop: 74,
    display: 'flex',
    justifyContent: 'center',
    '& > div': {
        width: 500,
        height: 45,
        border: '1px solid #767676',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        marginRight: 20
    },
    '& > div > div': {
        width: '85%',
        margin: '0 20px'
    }
});

const FindButton = styled(Button)({
    background: '#2557a7',
    textTransform: 'none',
    height: 45,
    borderRadius: 10,
    width: 100
});

const PostWrapper = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    '& > div': {
        border: '1px solid #d4d2d0',
        borderRadius: 10,
        margin: 10,
        width: '30%',
        height: 300,
    }
});

const AllPosts = () => {
    const [posts, setPosts] = useState([]); // Initialize as an empty array
    const [text, setText] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getAllPosts();
                // Ensure response data is an array before setting
                setPosts(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setPosts([]); // Fallback to an empty array in case of error
            }
        };

        getData();
    }, []);

    return (
        <>
            <Header />
            <SearchContainer>
                <Box>
                    <InputBase 
                        placeholder='Job title'
                        onChange={(e) => setText(e.target.value)}
                    />
                    <SearchIcon />
                </Box>
                <FindButton variant="contained">Find Jobs</FindButton>
            </SearchContainer>
            <PostWrapper>
                {
                    // Only proceed with filtering if posts is a valid array
                    posts && Array.isArray(posts) && posts.length > 0 && posts
                        .filter(post => post.profile.toLowerCase().includes(text.toLowerCase()))
                        .map(post => (
                            <Card key={post.id}>
                                <CardContent>
                                    <Typography variant="h5">{post.profile}</Typography>
                                    <Typography>{post.type === "Offline" ? "Remote" : "Office"}</Typography>
                                    <Typography>Salary: {post.salary}</Typography>
                                    <Typography style={{ color: '#6f6f6f', margin: '10px 0' }}>
                                        {post.description.length > 150 ? post.description.substring(0, 150) + "..." : post.description}
                                    </Typography>
                                    <Typography><b>Experience</b>: {post.experience}</Typography>
                                    <Typography><b>Technology</b>: {post.technology}</Typography>
                                    <Typography style={{ color: '#6f6f6f', marginTop: 'auto' }}>
                                        posted on {new Date(post.createdAt).toLocaleDateString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                }
            </PostWrapper>
        </>
    );
};

export default AllPosts;
