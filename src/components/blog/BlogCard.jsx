import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock } from 'react-icons/fi';

const BlogCard = memo(({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="glass-effect rounded-[2.5rem] overflow-hidden border border-slate-100 h-full flex flex-col transition-all duration-500 hover:border-glowave-primary-blue/30 hover:bg-slate-50 hover:shadow-2xl">
        {/* Image Container */}
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-glowave-primary-blue/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 grow flex flex-col">
          <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            <span>{post.date}</span>
            <div className="w-1 h-1 rounded-full bg-slate-200" />
            <div className="flex items-center gap-1">
              <FiClock />
              <span>5 min read</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 group-hover:text-glowave-primary-blue transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto">
            <Link 
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-glowave-text group-hover:text-glowave-primary-blue transition-colors"
            >
              Read Full Insight 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default BlogCard;
