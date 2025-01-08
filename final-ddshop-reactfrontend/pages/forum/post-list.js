// pages/forum/post-list.js
import { Space } from 'antd';
import PostCard from '@/components/forum/post-card';

const List = ({ posts }) => {
  return (
    <Space direction="vertical" className="w-100 mb-4">
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </Space>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch('https://api.example.com/posts'); // 替換為你的API
    const posts = await res.json();

    // 檢查是否獲取到數據
    if (!posts || posts.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: { posts },
      revalidate: 10, // 可選：增量靜態再生成
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      notFound: true,
    };
  }
}

export default List;

