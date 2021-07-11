<template>
  <router-view />
</template>

<style lang="scss">
:root {
  // --main-wrapper-width: clamp(375px, 90%, 1720px);
  // --drawer-width: 240px;

  // light
  --primary-font-color: #121212;
  --secondary-font-color: #fff;
  --primary-bg: 255, 255, 255;
  --secondary-bg: 18, 18, 18;
  --background-color: #fff;
  --foreground-color: #121212;

  // dark
  --primary-font-color: #fff;
  --secondary-font-color: #121212;
  --primary-bg: 18, 18, 18;
  --secondary-bg: 255, 255, 255;
  --background-color: #121212;
  --foreground-color: #fff;

  color: var(--primary-font-color);
  font-size: 16px;
}

@media screen and (max-width: 992px) {
  :root {
    font-size: 14px;
  }
}

// @media screen and (max-width: 768px) {
//   :root {
//   }
// }

// @media screen and (max-width: 375px) {
//   :root {
//   }
// }

img[alt] {
  color: transparent;
}

img::after {
  font-weight: 900;
  font-family: "Font Awesome 5 Pro";
  content: "\f071"" Broken Image of " attr(alt);
  display: block;
  font-size: 16px;
  font-style: normal;
  color: rgb(100, 100, 100);

  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
}

b,
strong {
  font-weight: bold;
}

blockquote {
  border-left: 0.3em solid grey;
  margin-top: 1em;
  margin-bottom: 1em;
  font-style: italic;
  p {
    padding: 0.6em 2em;
  }
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

i,
em {
  font-style: italic;
}

input,
textarea,
button,
select,
div,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  background-color: var(--background-color);
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fromtop-enter-active,
.fromtop-leave-active {
  transition: all 0.6s ease !important;
}

.fromtop-enter-from,
.fromtop-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.frombottom-enter-active,
.frombottom-leave-active {
  transition: all 0.6s ease !important;
}

.frombottom-enter-from,
.frombottom-leave-to {
  opacity: 0;
  transform: translateY(700px);
}

.fromleft-enter-active,
.fromleft-leave-active {
  transition: all 0.6s ease !important;
}

.fromleft-enter-from,
.fromleft-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}

.fromright-enter-active,
.fromright-leave-active {
  transition: all 0.6s ease !important;
}

.fromright-enter-from,
.fromright-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

img {
  background-color: lightgray;
  object-fit: cover;
}

.limited-text {
  --snup: 3;
  display: -webkit-box;
  -webkit-line-clamp: var(--snup);
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
