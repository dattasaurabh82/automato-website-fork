## Setup the environment
1. Make sure you have the pre-requisities for the dev environment:
   - [Hugo](https://gohugo.io/installation/)
   - [node js](https://nodejs.org/en/) 
     ```shell
     # mac
     brew install node
     ```
     > Best practice is to install a [node version manager](https://tecadmin.net/install-nvm-macos-with-homebrew/) to manage your nodejs instllations. 
   - [graphicsmagic](http://www.graphicsmagick.org/index.html).
   
      > To create the different sizes of images it uses graphicmagic
      
      ```shell
      # mac
      brew install imagemagick
      brew install graphicsmagick
      npm i -g gm
      ```

2. Clone the repository.
3. Install the dependencies. 
   ```shell
    # cd to the folder
    npm install
    # might take a bit ...
    ```
 
## Run the site
to run the site on the local machine run

```
grunt edit
```

You should be able to view it at http://127.0.0.1:8080/. the site is automatically regenerated and served every time you make new changes to the contents

when you run grunt edit the website is built with option  `--buildDrafts=true` this means that even if a content is marked as draft will be rendered in preview


## Edit the contents

contents are stored in /site/contents, you can create new pages from the terminal with
first move to the root of the hugo site inside /site

```
cd site
```
then use the `hugo new` command specifying the name and locatin of the content you want to build

```
hugo new portfolio/myNewProject.md
hugo new experiments/myNewProject.md
```
this automatically gives date and title to the new contents.

have a look at how other contents are build to understand how to use shortcode and add images and galleries

## Deploy the changes
first build the site with
```
grunt
```
_nb: `--buildDrafts=false` draft content will not be built._
then use deploy task to push the modification to githubpages
```
grunt deploy
```

### notes:
- the main css file you should edit is placed inside site/themes/automato/static/less/styles.less
- images for the blog post that need to be resized should be placed inside a img foolder at the root of the project, the different image sizes will be generated according to the gruntfile
- the favicons are generated with a grunt task `grunt favicons` - just provide the original image called **favicon.png** inside the assets folder of the theme 

Automato site is built with hugo and based on [Hugo, grunt, less kickstart template](https://github.com/lorenzoromagnoli/hugoGruntKickstart) inspired by [http://tjm.io/grunt-hugo/](http://tjm.io/grunt-hugo/) tutorial
