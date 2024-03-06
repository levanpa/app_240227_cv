<script setup>
import { ref } from 'vue'

function copyToClipboard(event) {
  if (!navigator.clipboard) {
    console.log('The browser does not support.')
    return
  }
  // get text value to copy
  const value = event.target.closest('.text-wrapper').querySelector('.text').textContent

  navigator.clipboard.writeText(value).then(() => {
    // notify if copy is successful
    showNotification('.copy-notify', event.target)
  })
}

function showNotification(selector, relativeElement) {
  const notifyElement = document.querySelector(selector)
  const top = relativeElement.getBoundingClientRect().top
  const left = relativeElement.getBoundingClientRect().left
  notifyElement.setAttribute('style', `top: ${top - 10}px; left: ${left + 25}px;`)
  notifyElement.classList.remove('show')
  setTimeout(() => {
    notifyElement.classList.add('show')
  }, 100)
}

function bait(event) {
  showNotification('.baited-notity', event.target)
}
</script>

<template lang="pug">
.sidebar-wrapper
  .top-wrapper.pc
    .avatar
      img(src="../assets/me.png" alt="Le Van Pa" title="I'm older than this image")
    .right
      h1.name LE VAN PA
      span.born Born in 1995
  ul.info-wrapper
    li.info-item
      i.icon.fa-solid.fa-square-phone
      .text-wrapper
        a.text(href="tel:0338401232") 0338401232
        button.copy-button(@click.prevent="copyToClipboard" title="copy to clipboard")
          i.fa-regular.fa-copy
    li.info-item
      i.icon.fa-solid.fa-square-envelope
      .text-wrapper
        a.text(target="_blank" href="mailto:levanpa00@gmail.com") levanpa00@gmail.com
        button.copy-button(@click.prevent="copyToClipboard" title="copy to clipboard")
          i.fa-regular.fa-copy
    li.info-item
      i.icon.fa-solid.fa-map-location-dot
      .text-wrapper
        a.text(target="_blank" href="https://maps.app.goo.gl/7Mm6bywZanWTK2jj6") Thanh Da, Binh Thanh
        button.copy-button(@click.prevent="copyToClipboard" title="copy to clipboard")
          i.fa-regular.fa-copy
  ul.contact-wrapper
    li.contact-item
      i.icon.fa-brands.fa-facebook-messenger
      .text-wrapper
        a.text(target="_blank" href="https://m.me/kaipawoo")
          span.hidden https://
          |m.me/kaipawoo
        button.copy-button(@click.prevent="copyToClipboard" title="copy to clipboard")
          i.fa-regular.fa-copy
    li.contact-item
      i.icon.fa-brands.fa-behance
      .text-wrapper
        a.text(target="_blank" href="https://be.net/levanpa")
          span.hidden https://
          |be.net/levanpa
        button.copy-button(@click.prevent="copyToClipboard" title="copy to clipboard")
          i.fa-regular.fa-copy
    li.contact-item
      i.icon.fa-brands.fa-telegram
      .text-wrapper
        a.text(target="_blank" href="https://t.me/levanpa00")
          span.hidden https://
          |t.me/levanpa00
        button.copy-button(@click.prevent="copyToClipboard" title="copy to clipboard")
          i.fa-regular.fa-copy
  .soft-skills-wrapper
    .title-wrapper
      i.caret-icon.fa-solid.fa-caret-down(@click.prevent="bait")
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
    a.qr-image(href="https://github.com/levanpa/app_240227_cv/tree/build" target="_blank")
      img(src="../assets/qr_to_github.png" alt="levanpa cv github")
    .qr-text
      span Scan (or click)&nbsp;
      a.tiktok-link(href="https://www.tiktok.com/@dongkelailai" target="_blank" title="Bấm vào đây để được heal mỗi ngày") me
      span &nbsp;to go to source code of this project
  .copy-notify
    span.text Copied
  .baited-notity
    span.text You've got click baited!
</template>

<style lang="sass">
@import '../sass/sidebar.sass'
</style>
