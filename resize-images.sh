#!/bin/bash
cd new_images
mogrify -auto-orient -resize 1400x1400 -quality 90 -path ../assets/images/posts *.jpg
mogrify -auto-orient -resize 800x800 -quality 90 -path ../assets/images/posts/thumbnail *.jpg
