---
title: "Solutions in Search of a Problem: Wave"
date: 2025-07-18
series: "Solutions in Search of a Problem"
topic: projects
---

I think I’ll also start this series where I write about the coding projects I’ve worked on as I learn about software development. I discuss what the tool is, why I created this tool, some decisions I faced when creating the tool, and some major hurdles I’ve encountered.

### Motivation

I’m usually scouring the internet for my favorite artists’ unreleased music (or leaks/snippets). Since I’m not tryna pay for extra subscriptions other than Spotify, I download the mp3 file, which usually have some random person as the artist and a random album cover (if any at all). 

To change the song metadata, I have to open Apple Music, click “Get Info”, and edit the metadata from there. Then, I need to go to the directory where Apple Music saves the modified files, and then move them away. 

This whole process becomes a pain when I have to deal multiple songs from different artists. The goal was to create a command line script that would allow me to quickly view and edit the most common metadata associated with an audio file (as well as album cover art).


### Design Decisions
I searched up libraries to edit audio file metadata and found TagLib, which was written in C++ but has bindings in Python, Go, Rust, and more. I’m most comfortable with Python, but I was fiending to learn some a lower level language. It seemed like a no-brainer to use C++, I could likely get a lot of mileage by learning to be decent at it, and from what I’ve seen online, moving from C++ to C seems to be less painful than other languages.

Since I wanted to build a command line tool, I had the choice between designing my own basic command line argument parser, or looking a pre-built one. Since I intended for this project to be a sort of learning tool, I decided to go with rolling out my own. It also made things easy because I didn’t have to deal with installing libraries.

### Major Hurdles
To be honest, this project was very very straightforward, I didn’t really face any particular issues.

### Future Plans
More immediately, I only support jpeg and png image files for album covers right now, but I want to include support for jpg files. More long term, I want to expand the argument parser to include support for shorter flags. In addition, I think I want to maybe support batch operations for multiple audio files, but that’s later on.