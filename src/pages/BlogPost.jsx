import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import PageTransition from '../components/layout/PageTransition';
import { FiArrowLeft, FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import { useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stagger: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <PageTransition>
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-glow-blue z-[100] origin-left"
        style={{ scaleX }}
      />

      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors uppercase text-xs tracking-widest font-bold"
          >
            <FiArrowLeft /> Back to Journal
          </Link>

          <header className="mb-16">
            <span className="bg-white/5 text-glow-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 mb-8 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-white/40 text-sm">
              <span className="flex items-center gap-2"><FiUser className="text-glow-blue" /> {post.author}</span>
              <span className="flex items-center gap-2"><FiCalendar className="text-glow-blue" /> {post.date}</span>
              <span className="flex items-center gap-2"><FiClock className="text-glow-blue" /> 8 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-glow-blue/10 border border-white/10">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div 
            className="prose prose-invert prose-lg max-w-none prose-p:text-white/70 prose-headings:text-white prose-a:text-glow-blue prose-img:rounded-3xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-24 pt-12 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?u=author" alt="Author" className="w-12 h-12 rounded-full border border-white/10" />
              <div>
                <p className="text-white font-bold">{post.author}</p>
                <p className="text-white/40 text-sm uppercase tracking-widest text-[10px]">Senior Strategist</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {/* Share links would go here */}
            </div>
          </footer>
        </div>
      </article>
    </PageTransition>
  );
};

export default BlogPost;
