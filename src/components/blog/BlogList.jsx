import { blogPosts } from '../../data/blogData';
import BlogCard from './BlogCard';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const BlogList = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedWrapper key={post.id} delay={index * 0.1}>
              <BlogCard post={post} />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
