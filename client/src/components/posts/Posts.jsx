import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://live.staticflickr.com/3686/9952432553_07dc26c9e5_b.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://live.staticflickr.com/2279/2204300638_792e8f7d42_k.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://live.staticflickr.com/5138/5465626912_23f6c0a6e8_k.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://live.staticflickr.com/1052/3173082837_656108de8f_c.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://live.staticflickr.com/3004/2956301599_10949687be_b.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  );
}
