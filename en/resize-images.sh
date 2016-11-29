#!/bin/bash
cd new_images
mogrify -resize 1600x1600 -quality 100 -path ../assets/images/posts *.JPG
mogrify -resize 900x900 -quality 90 -path ../assets/images/posts/thumbnail *.JPG
