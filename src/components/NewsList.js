import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsItemBlock=styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px) {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
`;

const NewsList=({category})=>{
    const [loading, response, error]=usePromise(()=>{
        const query=category==='all' ? ' ':`&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=40ae46503ca74be9b8f51b0409ebeea9`,
        );
    },[category]);
   if(loading){
       return <NewsItemBlock>Loading...</NewsItemBlock>
   }
   if(!response){
       return null;
   }
   if(error){
       return <NewsItemBlock>*Error*</NewsItemBlock>
   }
   const {articles}=response.data;
   return(
       <NewsItemBlock>
           {articles.map(article=>(
               <NewsItem key={article.url} article={article}/>
           ))}
       </NewsItemBlock>
   );
};
export default NewsList;