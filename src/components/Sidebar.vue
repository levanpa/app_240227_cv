<script setup>
import { ref, onMounted } from 'vue'

let modal = ref(null)

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

function handleModal() {
  modal = document.querySelector('.soft-skills-modal')
  modal.addEventListener('click', event => {
    const bounding = modal.getBoundingClientRect()
    if (
      event.clientX < bounding.left ||
      event.clientX > bounding.right ||
      event.clientY < bounding.top ||
      event.clientY > bounding.bottom
    ) {
      closeModal()
    }
  })
  modal.addEventListener('close', event => {
    document.querySelector('body').classList.remove('is-modal-open')
  })
}

function expandSoftSkills() {
  modal.showModal()
  document.querySelector('body').classList.add('is-modal-open')
}

function closeModal() {
  modal.classList.add('closing')
  modal.addEventListener('animationend', () => {
    modal.classList.remove('closing')
    modal.close()
  }, { once: true })
}

onMounted(() => {
  handleModal()
})
</script>

<template lang="pug">
.sidebar-wrapper
  .top-wrapper.pc
    .avatar
      img(src="../assets/me.png" :alt="$t('name')" :title="$t('old')")
    .right
      h1.name {{ $t('name') }}
      span.born {{ $t('born') }}

  ul.info-wrapper
    li.info-item
      i.icon.fa-solid.fa-square-phone
      .text-wrapper
        a.text(href="tel:0338401232") 0338401232
        button.copy-button(@click.prevent="copyToClipboard" :title="$t('copy_title')")
          i.fa-regular.fa-copy
    li.info-item
      i.icon.fa-solid.fa-square-envelope
      .text-wrapper
        a.text(target="_blank" href="mailto:levanpa00@gmail.com") levanpa00@gmail.com
        button.copy-button(@click.prevent="copyToClipboard" :title="$t('copy_title')")
          i.fa-regular.fa-copy
    li.info-item
      i.icon.fa-solid.fa-map-location-dot
      .text-wrapper
        a.text(target="_blank" href="https://maps.app.goo.gl/7Mm6bywZanWTK2jj6") Thanh Da, Binh Thanh
        button.copy-button(@click.prevent="copyToClipboard" :title="$t('copy_title')")
          i.fa-regular.fa-copy

  ul.contact-wrapper
    li.contact-item
      i.icon.fa-brands.fa-facebook-messenger
      .text-wrapper
        a.text(target="_blank" href="https://m.me/kaipawoo")
          span.hidden https://
          |m.me/kaipawoo
        button.copy-button(@click.prevent="copyToClipboard" :title="$t('copy_title')")
          i.fa-regular.fa-copy
    li.contact-item
      i.icon.fa-brands.fa-behance
      .text-wrapper
        a.text(target="_blank" href="https://be.net/levanpa")
          span.hidden https://
          |be.net/levanpa
        button.copy-button(@click.prevent="copyToClipboard" :title="$t('copy_title')")
          i.fa-regular.fa-copy
    li.contact-item
      i.icon.fa-brands.fa-telegram
      .text-wrapper
        a.text(target="_blank" href="https://t.me/levanpa00")
          span.hidden https://
          |t.me/levanpa00
        button.copy-button(@click.prevent="copyToClipboard" :title="$t('copy_title')")
          i.fa-regular.fa-copy

  .soft-skills-wrapper
    .title-wrapper
      i.caret-icon.fa-solid.fa-caret-down(@click.prevent="bait")
      i.icon.fa-solid.fa-universal-access
      h2.title {{ $t('soft_skills.title') }}
      button.common-button(aria-label="expand soft skills button" @click.prevent="expandSoftSkills")
        i.fa-solid.fa-maximize
    ul.list
      li.item {{ $t('soft_skills.skill1') }}
      li.item {{ $t('soft_skills.skill2') }}
      li.item {{ $t('soft_skills.skill3') }}
      li.item {{ $t('soft_skills.skill4') }}
      li.item {{ $t('soft_skills.skill5') }}
    dialog.soft-skills-modal
      button.close-button(aria-label="close modal button" @click="closeModal")
        i.fa-regular.fa-circle-xmark
      ul.modal-list
        li.modal-item
          p.title {{ $t('soft_skills.skill1') }}
          p.description {{ $t('soft_skills.desc1') }}
        li.modal-item
          p.title {{ $t('soft_skills.skill2') }}
          p.description {{ $t('soft_skills.desc2') }}
        li.modal-item
          p.title {{ $t('soft_skills.skill3') }}
          p.description {{ $t('soft_skills.desc3') }}
        li.modal-item
          p.title {{ $t('soft_skills.skill4') }}
          p.description {{ $t('soft_skills.desc4') }}
        li.modal-item
          p.title {{ $t('soft_skills.skill5') }}
          p.description {{ $t('soft_skills.desc5') }}

  .qr-wrapper
    a.qr-image(href="https://github.com/levanpa/app_240227_cv/tree/build" target="_blank")
      img(src="../assets/qr_to_github.png" alt="levanpa cv github")
    .qr-text
      span {{ $t('qr.desc1') }}&nbsp;
      a.tiktok-link(href="https://www.tiktok.com/@dongkelailai" target="_blank" :title="$t('qr.qr_title')") {{ $t('qr.me') }}
      span &nbsp;{{ $t('qr.desc2') }}
  .copy-notify
    span.text {{ $t('copied') }}
  .baited-notity
    span.text {{ $t('baited') }}

</template>

<style lang="sass">
@import '../sass/sidebar.sass'
</style>
