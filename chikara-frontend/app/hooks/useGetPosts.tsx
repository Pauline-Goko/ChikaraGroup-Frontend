"use client"
// import { getPosts } from "../utilities/utils";
// import { useEffect,useState } from "react";
// interface PostsData{
//     // username:string;
//     id:number;
//     description:string;
//     location:string;
//     email:string;
//     phone_number:string;
// }
// const useGetPosts=()=>{
//     const [posts, setPosts]=useState<PostsData[]>([]);
//     useEffect(()=>{
//       (async()=>{
//         const posts=await getPosts();
//         setPosts(posts);        
//       })();
//     },[])
//     return {posts}
  
  
// }
// export default useGetPosts



import { useEffect, useState } from "react";
import { createPost } from "../utilities/utils"; // Import the createPost function

interface NewPostData {
  // Define the structure of the data for creating a new post
  description: string;
  location: string;
  email: string;
  phone_number: string;
}

const useCreatePost = () => {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const createNewPost = async (postData: NewPostData) => {
    setIsCreatingPost(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await createPost(postData);

      if (response.error) {
        setError(response.error); // Handle server-side validation errors, if any
        setSuccess(false);
      } else {
        setSuccess(true);
      }
    } catch (error) {
      setError("An error occurred while creating the post.");
      setSuccess(false);
    } finally {
      setIsCreatingPost(false);
    }
  };

  return { createNewPost, isCreatingPost, error, success };
};

export default useCreatePost;
