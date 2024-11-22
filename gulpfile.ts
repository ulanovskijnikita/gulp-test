import {src, dest, watch, parallel, series} from 'gulp'

import gulpSass from 'gulp-sass'
import sass from 'sass'
// const scss = gulpSass(sass)

import autoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import brouserSync from 'browser-sync'
import uglify from 'gulp-uglify-es'
// import avif from 'gulp-avif'
// import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'
// import include from 'gulp-include'
// import clean from 'gulp-clean'