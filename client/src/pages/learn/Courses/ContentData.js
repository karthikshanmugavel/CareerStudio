const contentData = [
  {
    name: "HTML",
    path: "html",
    sub: [
      {
        section: "Home",
        path: "home",
        items: [
          {
            title: "Introduction?",
            path: "introduction",
            content: [
              { type: "heading", level: 2, text: "What is HTML?" },
              {
                type: "paragraph",
                text: "HTML stands for HyperText Markup Language. It is used to structure the content on the web by using various elements (commonly known as tags). These HTML elements define the different sections of a web page, such as headings, paragraphs, links to other webpages, listings, images, tables, etc. These elements tell the browser about the content and formatting to display.",
              },
              {
                type: "paragraph",
                text: "HTML is HyperText + Markup Language. Where,",
              },
              {
                type: "list",
                items: [
                  "HyperText refers to the way in which Web pages (HTML documents) are linked together. Thus, the link available on a webpage is called HyperText.",
                  "Markup Language, which means you use HTML to simply mark up a text document with tags that tell a Web browser how to structure it to display.",
                ],
              },
              {
                type: "code",
                language: "html",
                content: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>`,
              },
            ],
          },
        ],
      },
      {
        section: "HTML Elements",
        path: "elements",
        items: [
          {
            title: "Basic Elements",
            path: "basicelements",
            content: [
              { type: "heading", text: "HTML Elements" },
              {
                type: "paragraph",
                text: "HTML elements are the building blocks of HTML. Elements typically consist of an opening tag, content, and a closing tag.",
              },
              {
                type: "code",
                language: "html",
                content:
                  "<p>This is a paragraph.</p>\n<h1>This is a heading</h1>\n<a href='https://example.com'>Visit</a>",
              },
              {
                type: "list",
                items: [
                  "Block-level elements: <div>, <p>, <h1> to <h6>",
                  "Inline elements: <span>, <a>, <strong>",
                  "Void/self-closing elements: <br>, <img>",
                ],
              },
            ],
          },
          {
            title: "Semantic Elements",
            path: "semantic-elements",
            content: [
              { type: "heading", text: "Semantic Elements" },
              {
                type: "paragraph",
                text: "Semantic HTML introduces elements that clearly describe their meaning in a human- and machine-readable way.",
              },
              {
                type: "list",
                items: [
                  "<header>, <footer>, <nav> - page layout",
                  "<article>, <section>, <aside> - content groupings",
                  "<main> - main content block",
                ],
              },
              {
                type: "code",
                language: "html",
                content: `<header>\n  <h1>Site Title</h1>\n</header>\n<main>\n  <section>Welcome</section>\n</main>`,
              },
            ],
          },
        ],
      },
      {
        section: "HTML Attributes",
        path: "attributes",
        items: [
          {
            title: "Global Attributes",
            path: "global",
            content: [
              { type: "heading", text: "Global Attributes" },
              {
                type: "paragraph",
                text: "Global attributes are applicable to all HTML elements and help define behavior, styling, or other metadata.",
              },
              {
                type: "list",
                items: ["id", "class", "style", "title", "lang", "hidden"],
              },
              {
                type: "code",
                language: "html",
                content: `<p id=\"intro\" class=\"text\" style=\"color:red;\">Hello</p>`,
              },
            ],
          },
          {
            title: "Event Attributes",
            path: "event-attributes",
            content: [
              { type: "heading", text: "Event Attributes" },
              {
                type: "paragraph",
                text: "Used to trigger JavaScript on user actions like click, mouseover, or load.",
              },
              {
                type: "code",
                language: "html",
                runnable: true,
                content: `<button onclick=\"alert('Clicked!')\">Click Me</button>`,
              },
            ],
          },
        ],
      },
      {
        section: "HTML Forms",
        path: "forms",
        items: [
          {
            title: "Form Basics",
            path: "form-basics",
            content: [
              { type: "heading", text: "HTML Forms" },
              {
                type: "paragraph",
                text: "Forms collect user input and send it to a server. The <form> element can contain various input fields.",
              },
              {
                type: "code",
                language: "html",
                content: `<form action=\"/submit\" method=\"POST\">\n  <input type=\"text\" name=\"username\">\n  <input type=\"submit\" value=\"Send\">\n</form>`,
              },
            ],
          },
          {
            title: "Input Types",
            path: "input-types",
            content: [
              { type: "heading", text: "Form Input Types" },
              {
                type: "list",
                items: [
                  "text",
                  "email",
                  "number",
                  "password",
                  "checkbox",
                  "radio",
                  "submit",
                  "reset",
                ],
              },
              {
                type: "code",
                language: "html",
                content: `<input type=\"text\">\n<input type=\"email\">\n<input type=\"checkbox\">`,
              },
            ],
          },
        ],
      },
      {
        section: "HTML Media",
        path: "media",
        items: [
          {
            title: "Images, Audio, Video",
            path: "media-tags",
            content: [
              { type: "heading", text: "Multimedia in HTML" },
              {
                type: "paragraph",
                text: "HTML supports embedding of images, audio, and video through dedicated tags.",
              },
              {
                type: "code",
                language: "html",
                content: `<img src=\"cat.jpg\" alt=\"Cute Cat\">\n<audio controls>\n  <source src=\"song.mp3\" type=\"audio/mp3\">\n</audio>\n<video controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video>`,
              },
            ],
          },
        ],
      },
      {
        section: "HTML Tables",
        path: "tables",
        items: [
          {
            title: "Creating Tables",
            path: "creating-tables",
            content: [
              { type: "heading", text: "HTML Tables" },
              {
                type: "paragraph",
                text: "Tables help to display data in rows and columns using <table>, <tr>, <td>, and <th> elements.",
              },
              {
                type: "code",
                language: "html",
                content: `<table border=\"1\">\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Jane</td><td>22</td></tr>\n</table>`,
              },
            ],
          },
        ],
      },
      {
        section: "HTML Meta & Head",
        path: "meta-head",
        items: [
          {
            title: "Head & Meta Tags",
            path: "head-meta",
            content: [
              { type: "heading", text: "Head & Meta Tags" },
              {
                type: "paragraph",
                text: "Metadata inside the <head> section is essential for SEO, page rendering, and linking resources.",
              },
              {
                type: "code",
                language: "html",
                content: `<head>\n  <title>My Page</title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"Learn HTML\">\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>`,
              },
            ],
          },
        ],
      },
      {
        section: "HTML Entities",
        path: "entities",
        items: [
          {
            title: "Special Characters",
            path: "entities-characters",
            content: [
              { type: "heading", text: "HTML Entities" },
              {
                type: "paragraph",
                text: "Entities are used to display characters reserved in HTML or not easily typed on a keyboard.",
              },
              {
                type: "list",
                items: [
                  "&lt; → <",
                  "&gt; → >",
                  "&amp; → &",
                  '&quot; → "',
                  "&copy; → ©",
                ],
              },
              {
                type: "code",
                language: "html",
                content: `&lt;h1&gt;Welcome&lt;/h1&gt;\n&copy; 2024`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "CSS",
    path: "css",
    sub: [
      {
        section: "Home",
        path: "home",
        items: [
          {
            title: "Introduction",
            path: "introduction",
            content: [
              { type: "heading", level: 2, text: "Introduction" },
              {
                type: "list",
                items: [
                  "CSS stands for Cascading Style Sheets",
                  "It describes how HTML elements are to be displayed on screen, paper, or in other media",
                  "CSS saves a lot of work. It can control the layout of multiple web pages all at once",
                  "External stylesheets are stored in CSS files",
                ],
              },
              { type: "heading", level: 2, text: "Why use CSS" },

              {
                type: "code",
                language: "css",
                content: `body {
  background-color: lightblue;
  }
  
  h1 {
  color: white;
  text-align: center;
  }
  
  p {
  font-family: verdana;
  font-size: 20px;
  }`,
              },
            ],
          },
          {
            title: "Types of css",
            path: "types",
            content: [{ type: "heading", level: 1, text: "Types of CSS" }],
          },
        ],
      },
    ],
  },
  {
    name: "JavaScript",
    path: "javascript",
    sub: [
      {
        section: "JS Basics",
        path: "basics",
        items: [
          {
            title: "Variables in JS",
            path: "variables",
            content: [
              { type: "heading", text: "JavaScript Variables" },
              {
                type: "paragraph",
                text: "Variables are containers for storing data values. JavaScript uses var, let, and const to declare variables.",
              },
              {
                type: "code",
                language: "javascript",
                content: `let name = "John";
  const age = 30;`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "C",
    path: "c",
    sub: [
      {
        section: "C Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to C",
            path: "intro",
            content: [
              { type: "heading", text: "C Programming" },
              {
                type: "paragraph",
                text: "C is a general-purpose procedural programming language that has been widely used for system and application development.",
              },
              {
                type: "code",
                language: "c",
                content: `#include <stdio.h>
  int main() {
    printf("Hello, World!");
    return 0;
  }`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "C++",
    path: "cpp",
    sub: [
      {
        section: "C++ Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to C++",
            path: "intro",
            content: [
              { type: "heading", text: "C++ Programming" },
              {
                type: "paragraph",
                text: "C++ is an extension of C with object-oriented features. It supports classes, inheritance, polymorphism, and more.",
              },
              {
                type: "code",
                language: "cpp",
                content: `#include <iostream>
  using namespace std;
  int main() {
    cout << "Hello, C++";
    return 0;
  }`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Java",
    path: "java",
    sub: [
      {
        section: "Java Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to Java",
            path: "intro",
            content: [
              { type: "heading", text: "Java Programming" },
              {
                type: "paragraph",
                text: "Java is a versatile, object-oriented programming language known for its portability and security.",
              },
              {
                type: "code",
                language: "java",
                content: `public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, Java");
    }
  }`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Python",
    path: "python",
    sub: [
      {
        section: "Python Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to Python",
            path: "intro",
            content: [
              { type: "heading", text: "Python Programming" },
              {
                type: "paragraph",
                text: "Python is an interpreted, high-level programming language with dynamic typing and easy syntax.",
              },
              {
                type: "code",
                language: "python",
                content: `print("Hello, Python")`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kotlin",
    path: "kotlin",
    sub: [
      {
        section: "Kotlin Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to Kotlin",
            path: "intro",
            content: [
              { type: "heading", text: "Kotlin Programming" },
              {
                type: "paragraph",
                text: "Kotlin is a modern programming language that runs on the JVM and is used for Android development.",
              },
              {
                type: "code",
                language: "kotlin",
                content: `fun main() {
    println("Hello, Kotlin")
  }`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Cybersecurity",
    path: "cybersecurity",
    sub: [
      {
        section: "Cybersecurity Basics",
        path: "basics",
        items: [
          {
            title: "What is Cybersecurity?",
            path: "intro",
            content: [
              { type: "heading", text: "Cybersecurity" },
              {
                type: "paragraph",
                text: "Cybersecurity involves protecting systems, networks, and data from digital attacks.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "C#",
    path: "csharp",
    sub: [
      {
        section: "C# Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to C#",
            path: "intro",
            content: [
              { type: "heading", text: "C# Programming" },
              {
                type: "paragraph",
                text: "C# is a modern, object-oriented language developed by Microsoft for building a variety of applications.",
              },
              {
                type: "code",
                language: "csharp",
                content: `using System;
  class Program {
    static void Main() {
      Console.WriteLine("Hello, C#");
    }
  }`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "WPF",
    path: "wpf",
    sub: [
      {
        section: "WPF Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to WPF",
            path: "intro",
            content: [
              {
                type: "heading",
                text: "WPF (Windows Presentation Foundation)",
              },
              {
                type: "paragraph",
                text: "WPF is a UI framework for building Windows desktop applications using XAML and C#.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "MySQL",
    path: "mysql",
    sub: [
      {
        section: "MySQL Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to MySQL",
            path: "intro",
            content: [
              { type: "heading", text: "MySQL Database" },
              {
                type: "paragraph",
                text: "MySQL is a popular open-source relational database used in many web applications.",
              },
              {
                type: "code",
                language: "sql",
                content: `CREATE DATABASE mydb;`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "XML",
    path: "xml",
    sub: [
      {
        section: "XML Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to XML",
            path: "intro",
            content: [
              { type: "heading", text: "XML (eXtensible Markup Language)" },
              {
                type: "paragraph",
                text: "XML is a markup language used to store and transport data in a structured format.",
              },
              {
                type: "code",
                language: "xml",
                content: `<note>
    <to>Tove</to>
    <from>Jani</from>
    <message>Hello</message>
  </note>`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Node.js",
    path: "nodejs",
    sub: [
      {
        section: "Node.js Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to Node.js",
            path: "intro",
            content: [
              { type: "heading", text: "Node.js" },
              {
                type: "paragraph",
                text: "Node.js is a JavaScript runtime built on Chrome's V8 engine for building scalable network applications.",
              },
              {
                type: "code",
                language: "javascript",
                content: `console.log('Hello from Node.js');`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "MongoDB",
    path: "mongodb",
    sub: [
      {
        section: "MongoDB Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to MongoDB",
            path: "intro",
            content: [
              { type: "heading", text: "MongoDB" },
              {
                type: "paragraph",
                text: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
              },
              {
                type: "code",
                language: "json",
                content: `{
    name: "John",
    age: 25
  }`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Angular",
    path: "angular",
    sub: [
      {
        section: "Angular Basics",
        path: "basics",
        items: [
          {
            title: "Introduction to Angular",
            path: "intro",
            content: [
              { type: "heading", text: "Angular Framework" },
              {
                type: "paragraph",
                text: "Angular is a TypeScript-based open-source framework for building client-side web applications.",
              },
              {
                type: "code",
                language: "typescript",
                content: `import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<h1>Hello Angular</h1>'
  })
  export class AppComponent {}`,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default contentData;
