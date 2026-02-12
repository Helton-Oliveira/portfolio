import {Component} from '@angular/core';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {
  project1 = new TechArea(
    1,
    'FRONT END',
    'Product Management and Full-Stack development for a hardware resource management platform. Engineered with React and Python for real-time tracking.',
    ['REACT', 'ANGULAR', 'TYPESCRIPT', 'JAVASCRIPT']
  );

  project2 = new TechArea(
    2,
    'BACKEND',
    'Web-based communication gateway facilitating ground-to-pilot data exchange. Focused on high-availability and low-latency message routing.',
    ['JAVA', 'NODE.JS', 'SPRING BOOT', 'NODE.JS', 'TYPESCRIPT']
  );

  project3 = new TechArea(
    3,
    'INFRASTRUCTURE',
    'Optimized route planning system with complex database querying. Scaled the architecture to support thousands of concurrent flight calculations.',
    ['POSTGRESQL', 'AWS', 'DOCKER', 'KUBERNETS', 'CLOUD']
  );


  projects: TechArea[] = [this.project1, this.project2, this.project3];

}

class TechArea {
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
