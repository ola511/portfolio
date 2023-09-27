
import React from 'react';
import { Carousel, Badge } from 'react-bootstrap';
// Add imports for each project's image. Assuming they are stored in `./imgs/` directory.
import Project1Preview from './imgs/APIFoodSearch.png';
import Project2Preview from './imgs/GuessGame.png';
import Project3Preview from './imgs/BookStore.png';
import Project4Preview from './imgs/dotNetProj.png';
// ... Add more imports for other project images

export default function Projects() {
    const projectsList = [
        {
            name: "Technology used",
            description: "Book Store Classic library",
            link: "https://github.com/ola511/Library",  // example GitHub link
            liveDemo: "https://classicbooks.netlify.app",  // example live demo link
            image: Project3Preview,  // associate the imported image here
            tech: " jQuery/ Bootstrap /CSS and JavaScrip"  // example technology for the badge
        },
        {
            name: "Technology used",
            description: "Game To Guess The Number",
            link: "https://github.com/ola511/GuessTheNumberGame",  // example GitHub link
            // example live demo link
            image: Project2Preview,  // associate the imported image here
            tech: "Angular/TypeScript"  // example technology for the badge
        },
        {
            name: "Technology used",
            description: "Searching by using API",
            link: "https://github.com/ola511/APIFoodSearch",  // example GitHub link
            liveDemo: "https://api-food-search.netlify.app",  // example live demo link
            image: Project1Preview,  // associate the imported image here
            tech: "JavaScript/API"  // example technology for the badge
        },


        {
            name: "Technology used",
            description: "Truck Management System Website",
            link: "https://github.com/ola511/OlaAlJarrahASP.NETUsingDatabase",  // example GitHub link
             // example live demo link
            image: Project4Preview,  // associate the imported image here
            tech: "Web API/ASP.NET Core MVC C# /Database"  // example technology for the badge
        },
        // Add more projects with similar structure as needed
    ];

    return (

            <div className="text-center">
            <h2>My Projects</h2>
            <p className='BodyText center'>
                This is a list of some of the projects I have made
            </p>
            <div className="hint center">Click on any of the previews for the GitHub links!</div>
            <div id='carousel'>
                <Carousel className="crsl-cont">
                    {projectsList.map((project, index) => (
                        <Carousel.Item key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={`${project.name} Preview`}
                                    className="carousel-image"
                                />
                            </a>

                            <Carousel.Caption>
                                <div className="cap-text-cont">
                                    <h3>{project.name}<Badge className="badge-margin">{project.tech}</Badge></h3>

                                    <p>{project.description}</p>
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo-link">
                                        View Live Demo
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                    ))}
                </Carousel>
            </div>
        </div>
    );
}

