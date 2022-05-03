type PostCreationForm = {
    title: string;
    text: string; 
    author: {
        userId: number
    }
}

export default PostCreationForm