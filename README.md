## Running a custom datalab image
### Prereqs:
1. Install Docker, gcloud SDK
2. Run `gcloud auth login` in terminal to login
3. Install datalab: (https://cloud.google.com/datalab/docs/quickstart)

### Instructions:
It's so useful to have all the gcp tools integrated in datalab, but I want to also preinstall other tools/libraries.

1. First, create a Docker image which uses the latest datalab image as its' base. I tried building locally from scratch using the provided build instructions on the datalab repo, but it was buggy and didn't work. So I'm using the latest repo image. If you look at [the base image](https://github.com/googledatalab/datalab/blob/master/containers/base/Dockerfile) in the datalab repo, you can get an idea of how you might want to write your Dockerfile. Here is mine:
```
FROM gcr.io/cloud-datalab/datalab:latest

WORKDIR /

RUN apt-key adv --keyserver   keyserver.ubuntu.com --recv-keys 04EE7237B7D453EC && \
    apt-key adv --keyserver   keyserver.ubuntu.com --recv-keys 648ACFD622F3D138 && \
    apt-get update && apt-get -y install libsndfile-dev ffmpeg && \
    apt-get autoremove -y && \
        rm -rf /var/lib/apt/lists/* && \
        rm -rf /tmp/* && \
        rm -rf /root/.cache/* && \
        rm -rf /usr/share/locale/* && \
        rm -rf /usr/share/i18n/locales/*

# copy code repo over (note that /content/datalab is where the jupyter notebook is launched)
COPY . /content/datalab/ml

# need bash to run source activate
SHELL ["/bin/bash", "-c"]
# py3env is the conda env name for the python 3 (found this by looking at the base Dockerfile)
RUN source activate py3env && \
    python -V && \
    pip install --quiet -U --upgrade-strategy only-if-needed --no-cache-dir -r /content/datalab/ml/requirements.txt && \
    pip install --quiet -U --upgrade-strategy only-if-needed --no-cache-dir firebase-admin

# necessary because of conflicts introduced with installing firebase-admin
RUN gcloud components update
```
2. Create the image: 
```
docker build -t ml-datalab . -f Dockerfile.datalab
```

3. If I want to test and run this locally, run this bash script:
```
#!/bin/bash


IMAGE=ml-datalab
PROJECT_ID=$(gcloud config get-value project)
PORTMAP="8081:8080" 
#for linux, PORTMAP="127.0.0.1:8081:8080"


docker run -it --rm \
   -p $PORTMAP \
   -e "PROJECT_ID=$PROJECT_ID" \
   $IMAGE
```
4. [Push image to gcp container repo](https://cloud.google.com/container-registry/docs/pushing-and-pulling):
```docker tag $IMAGE gcp.io/$PROJECT_ID/$IMAGE```

5. Start a datalab vm with your custom image
```datalab create --image-name=gcr.io/${PROJECT_ID}/datalab```

6. Optionally, set up a rebuild of your custom image whenever a (tagged) push is made to your code repo... next time.

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/carynbear/carynbear.github.io/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/carynbear/carynbear.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
