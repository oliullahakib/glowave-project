import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';

const BlogCard = ({ post }) => {
  return (
    <Card className="flex flex-col h-full p-0 overflow-hidden">
      <div className="aspect-video relative overflow-hidden group">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-glowave-primary-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
          <span className="flex items-center gap-1"><FiUser /> {post.author}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-glowave-primary-blue transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.slug}`} 
          className="flex items-center gap-2 text-sm font-semibold text-glowave-primary-blue hover:gap-3 transition-all"
        >
          Read Article <FiArrowRight />
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;
