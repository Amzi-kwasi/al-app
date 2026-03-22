import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index = 0 }) {
  const {
    id = 1,
    image = '/assets/project1.jpg',
    title = 'Project Title',
    description = 'A brief description of the project and what was achieved.',
    tags = ['Design', 'Development'],
    client = 'Client Name',
  } = project || {};

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="project-card-image-wrapper">
        <img src={image} alt={title} className="project-card-image" />
        <div className="project-card-overlay">
          <Link to={`/portfolio/${id}`} className="project-card-view-btn">
            View Project →
          </Link>
        </div>
      </div>
      <div className="project-card-body">
        <div className="project-card-tags">
          {tags.map(tag => (
            <span key={tag} className="project-card-tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        {client && (
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 12 }}>
            Client: <span style={{ color: 'var(--text-secondary)' }}>{client}</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
