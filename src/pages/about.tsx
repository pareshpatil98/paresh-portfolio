import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Paresh Patil"
      description="Know more about Paresh Patil - Full Stack Web Developer"
    >
      <main className={styles.main}>
        <div className={styles.container}>

          {/* ✅ TEXT FIRST */}
          <div className={styles.textColumn}>
            <h1>Hey, I’m Paresh Patil</h1>
            <p className={styles.subtitle}>
              Full-stack Web Developer | Ruby on Rails | React | Vue.js
            </p>

            <h2>About Me</h2>

            <p>
              I’m a Full Stack Web Developer with <strong>2.4+ years of experience</strong> building scalable web applications using <strong>Ruby on Rails, React, Vue.js, JavaScript, and HTML</strong>. I specialize in creating clean, maintainable, and high-performance software that solves real-world problems efficiently.
            </p>

            <p>
              My core expertise includes <strong>Rails, PostgreSQL, Vue.js, React, JavaScript, HTML, Git, and AWS (S3)</strong>, allowing me to develop robust backends, interactive frontends, and cloud-enabled applications. I’m passionate about writing clean code, optimizing performance, and implementing design patterns for scalable solutions.
            </p>
            <p>
              I enjoy sharing my learnings through blogs, tutorials, and interview prep guides, helping other developers grow while staying updated with modern technologies. My goal is to build meaningful, maintainable, and impactful software while continuously learning and contributing to the developer community.
            </p>

            <h2>Connect with Me</h2>
            <div className={styles.socialLinks}>
              <a href="https://github.com/pareshpatil98" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/pareshsharadpatil/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/@pareshpatil-1112" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>

          {/* ✅ IMAGE ON RIGHT (ON DESKTOP) */}
          <div className={styles.photoColumn}>
            <img src="/img/profile.png" alt="Paresh Patil" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
