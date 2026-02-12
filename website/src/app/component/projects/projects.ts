import {Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  project1 = new Project(
    1,
    'Hook\'em Hardware',
    'Product Management and Full-Stack development for a hardware resource management platform. Engineered with React and Python for real-time tracking.',
    ['REACT', 'PYTHON', 'MONGODB']
  );

  project2 = new Project(
    2,
    'ACARS Gateway',
    'Web-based communication gateway facilitating ground-to-pilot data exchange. Focused on high-availability and low-latency message routing.',
    ['TYPESCRIPT', 'NODE.JS', 'REDIS']
  );

  project3 = new Project(
    3,
    'Flight Planner Pro',
    'Optimized route planning system with complex database querying. Scaled the architecture to support thousands of concurrent flight calculations.',
    ['POSTGRESQL', 'AWS', 'DOCKER']
  );

  project4 = new Project(
    4,
    'DigiSphere Analytics',
    'Real-time data visualization dashboard for industrial IoT sensors. Implemented custom Angular pipes and signals for sub-second UI updates.',
    ['ANGULAR', 'RXJS', 'D3.JS']
  );


  projects: Project[] = [this.project1, this.project2, this.project3, this.project4];


}

class Project {
  id?: number;
  title?: string;
  content?: string;
  technologies?: string[]

  constructor(id: number, title: string, content: string, technologies: string[]) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.technologies = technologies;
  }
}
