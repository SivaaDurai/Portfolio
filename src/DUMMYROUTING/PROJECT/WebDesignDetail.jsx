// WebDesignDetail.js
import { Link } from 'react-router-dom';

export default function WebDesignDetail() {
  const projects = [
    { id: 'sample-website', title: 'Sample Website' },
    { id: 'todo-list', title: 'Todo List' },
    { id: 'weather-app', title: 'Weather App' },
  ];

  return (
    <div>
      <h2>Web Design Mini Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <Link to={`/portfolio/web-design/${p.id}`}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
