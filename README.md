# Musings v2.0

This is a rebuild of my simple blog website. 
We're using Bootstrap + Django for our tech stack (for now).

I'm switching from JAMStack to some Django to learn some Django. In additon, I have a lot more control over how it looks like.


## Setup

I don't include Bootstrap/Sass in the source code (just cause it's a lot of files). So it might be helpful (to future me) to figure out how to ensure bootstrap works.

First we install Bootstrap in a custom directory of our choosing. It's called `custom_bootstrap` in this project.
```
mkdir custom_bootstrap
cd custom_bootstrap
npm init -y
npm install bootstrap@5.3.6
```

There should already be a `custom.scss` file in the `scss` directory. All that's left is to compile that file into css.

To run the sass compiler, first install sass. Then have it watch for any changes in the `custom.scss` file.
```
npm install -g sass
sass ./scss/custom.scss ./css/custom.css
```

## Planned Features
- [x] Markdown article content support
- [ ] Updating the look and Feel of the admin page
- [ ] Implement pagination for the list of articles lol
- [ ] Articles search (if I have enough time)
- [ ] Email Notifications (if I decide to be consistent)
- [ ] Syntax highlighting for code snippets