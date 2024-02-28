<script setup>
import { ref } from 'vue'
</script>

<template lang="pug">
.sidebar-wrapper
  .top-wrapper
    .avatar
      img(src="../assets/me.png" alt="Le Van Pa")
    .right
      h1.name LE VAN PA
      span.born Born in 1995
  ul.info-wrapper
    li.info-item
      i.icon.fa-solid.fa-square-phone
      .text-wrapper
        a.text(href="tel:0338401232") 0338401232
        button.copy-button(title="copy to clipboard")
          i.fa-regular.fa-copy
    li.info-item
      i.icon.fa-solid.fa-square-envelope
      .text-wrapper
        a.text(target="_blank" href="mailto:levanpa00@gmail.com") levanpa00@gmail.com
        button.copy-button(title="copy to clipboard")
          i.fa-regular.fa-copy
    li.info-item
      i.icon.fa-solid.fa-map-location-dot
      .text-wrapper
        a.text(target="_blank" href="https://maps.app.goo.gl/7Mm6bywZanWTK2jj6") Thanh Da, Binh Thanh
        button.copy-button(title="copy to clipboard")
          i.fa-regular.fa-copy
  ul.contact-wrapper
    li.contact-item
      i.icon.fa-brands.fa-facebook-messenger
      .text-wrapper
        a.text(target="_blank" href="https://m.me/kaipawoo") m.me/kaipawoo
        button.copy-button(title="copy to clipboard")
          i.fa-regular.fa-copy
    li.contact-item
      i.icon.fa-brands.fa-behance
      .text-wrapper
        a.text(target="_blank" href="https://be.net/levanpa") be.net/levanpa
        button.copy-button(title="copy to clipboard")
          i.fa-regular.fa-copy
    li.contact-item
      i.icon.fa-brands.fa-telegram
      .text-wrapper
        a.text(target="_blank" href="https://t.me/levanpa00") t.me/levanpa00
        button.copy-button(title="copy to clipboard")
          i.fa-regular.fa-copy
  .soft-skills-wrapper
    .title-wrapper
      i.caret-icon.fa-solid.fa-caret-down
      i.icon.fa-solid.fa-universal-access
      h2.title soft skills
    ul.list
      li.item Experience in team working.
      li.item Research, learn new things.
      li.item Have responsibility for work.
      li.item Self-management.
      li.item Support and share.
  .add-skills-wrapper
    ul.list
     li.item
  .qr-wrapper
    a.qr-image(href="https://github.com/levanpa/app_240227_cv" target="_blank")
      img(src="../assets/qr_to_github.png")
    span.text Scan (or click) me to go to source code of this project
</template>

<style lang="sass">
@import '../sass/sidebar.sass'
</style>
