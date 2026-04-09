import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import PageTransition from '../components/layout/PageTransition';
import BlogCard from '../components/blog/BlogCard';
import SectionHeading from '../components/ui/SectionHeading';
import { FiArrowLeft, FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import { useEffect, useMemo } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  // Filter related posts (same category first, excluding current)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const sameCategory = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug);
    const others = blogPosts.filter(p => p.category !== post.category && p.slug !== post.slug);
    return [...sameCategory, ...others].slice(0, 3);
  }, [post]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    window.scrollTo(0, 0);
  }, [post, navigate, slug]);

  if (!post) return null;

  return (
    <PageTransition>
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-glowave-primary-blue z-100 origin-left shadow-premium-glow"
        style={{ scaleX }}
      />

      <article className="pt-40 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-3 text-slate-400 hover:text-glowave-primary-blue mb-16 transition-all group uppercase text-[10px] tracking-[0.3em] font-bold"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
          </Link>

          <header className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="bg-glowave-primary-blue/10 text-glowave-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-glowave-primary-blue/20">
                {post.category}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">{post.date}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-12 tracking-tight"
            >
              {post.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-8 text-slate-500 text-sm font-medium"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} className="w-full h-full object-cover" />
                </div>
                <span className="text-glowave-text font-bold">{post.author}</span>
              </div>
              <div className="w-px h-4 bg-slate-200 hidden md:block" />
              <div className="flex items-center gap-2">
                <FiClock className="text-glowave-primary-blue" /> 
                <span className="tracking-wide">5 min read</span>
              </div>
            </motion.div>
          </header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="aspect-video rounded-[3rem] overflow-hidden mb-24 shadow-2xl border border-slate-100 relative group"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          <div className="prose prose-2xl max-w-none prose-p:text-slate-600 prose-p:leading-[1.8] prose-headings:font-display prose-headings:tracking-tight prose-headings:text-glowave-text prose-strong:text-glowave-text prose-blockquote:border-glowave-primary-blue prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:italic">
             {/* Using a simple splitter for demo purposes, in real app this would be more complex or markdown based */}
             {post.content.split('\n\n').map((paragraph, i) => (
               <p key={i} className="mb-8">{paragraph}</p>
             ))}
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-40 pt-24 border-t border-slate-100">
              <div className="flex flex-col md:row items-center justify-between mb-16 gap-8">
                <div>
                  <span className="text-glowave-primary-blue font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Continuum</span>
                  <h2 className="text-4xl md:text-5xl font-bold font-display">Related <span className="text-gradient">Insights</span></h2>
                </div>
                <Link to="/blog" className="btn-outline-premium text-xs">Explore All Articles</Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <BlogCard post={relatedPost} />
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </PageTransition>
  );
};

export default BlogPost;
