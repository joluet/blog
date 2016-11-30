#!/bin/bash
cd new_images
mogrify -resize 1400x1400 -quality 90 -path ../assets/images/posts *.JPG
mogrify -resize 800x800 -quality 90 -path ../assets/images/posts/thumbnail *.JPG
