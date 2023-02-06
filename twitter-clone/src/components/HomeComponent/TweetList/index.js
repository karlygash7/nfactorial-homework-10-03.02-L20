import { AVATAR_IMG, AVATAR_IMG1, AVATAR_IMG2, AVATAR_IMG3 } from "../images"
import Tweet from "./Tweet"

export default function TweetList(){
    const tweets = [
        {
            authorName: 'From Kz today',
            authorUserName: '@kz',
            img: AVATAR_IMG,
            content: 'Today is a good day! We did a twitter clone!',
            replies: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: 'From Kz today',
            authorUserName: '@kz',
            img: AVATAR_IMG1,
            content: 'Today is a good day! We did a twitter clone!',
            replies: 195,
            retweets: 5000,
            likes: 95500
        },
        {
            authorName: 'From Kz today',
            authorUserName: '@kz',
            img: AVATAR_IMG2,
            content: 'Today is a good day! We did a twitter clone!',
            replies: 225,
            retweets: 1000,
            likes: 1111500
        },
        {
            authorName: 'From Kz today',
            authorUserName: '@kz',
            img: AVATAR_IMG3,
            content: 'Today is a good day! We did a twitter clone!',
            replies: 325,
            retweets: 777,
            likes: 1252255
        }
    ]
    return tweets.map((item,index)=><Tweet {...item} key={index}/>)
}