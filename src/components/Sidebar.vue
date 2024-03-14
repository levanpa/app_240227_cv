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
      button.common-button(aria-label="expand soft skills button" @click.prevent="expandSoftSkills")
        i.fa-solid.fa-maximize
    ul.list
      li.item Experience in teamwork.
      li.item Research, learn new things.
      li.item Have responsibility for work.
      li.item Self-management.
      li.item Support and share.
    dialog.soft-skills-modal
      button.close-button(aria-label="close modal button" @click="closeModal")
        i.fa-regular.fa-circle-xmark
      ul.modal-list
        li.modal-item
          p.title Experience in team working.
          p.description Working in teams has taught me the value of open communication, adapt to diverse personalities, clear role definition, and support colleagues, all of which are crucial elements in accomplishing shared objectives.
          //- Qua quá trình làm việc nhóm nhiều năm, tôi có khả năng chia sẻ ý tưởng với người khác, hoà nhập với đa dạng tính cách, phân định rạch ròi vai trò trách nhiệm từng người nhưng không thể thiếu việc hỗ trợ đồng nghiệp để hoàn thành nhiệm vụ chung.
        li.modal-item
          p.title Research, learn new things.
          p.description New technologies are developed to either resolve limitations of existing technologies or improve their efficiency. Therefore, I continuously learn and embrace new technologies to enhance my skills.
          //- Công nghệ mới ra đời nhằm mục đích giải quyết vấn đề trong quá khứ hoặc nâng cao hiệu suất của công nghệ cũ. Vì vậy tôi luôn luôn học hỏi và tiếp thu công nghệ mới để nâng cao hiệu suất tay nghề của mình.
        li.modal-item
          p.title Have responsibility for work.
          p.description Earning the trust and respect of colleagues, superiors, and clients is very important, and this can only be achieved through a strong sense of responsibility in my work.
          //- Sự tin tưởng và tôn trọng từ đồng nghiệp, cấp trên và khách hàng là điều vô cùng quan trọng, mà chỉ có thể đạt được thông qua sự trách nhiệm trong công việc.
        li.modal-item
          p.title Self-management.
          p.description Skills to work independently, self-manage your work via Trello, Google Sheet.
          //- Kỹ năng làm việc độc lập, tự quản lý công việc của mình qua Trello, Google Sheet
        li.modal-item
          p.title Support and share.
          p.description I am always ready to share new knowledge in the company's knowledge book, as well as share and provide direct and dedicated guidance to new employees. That helps increase the capacity of the whole team.
          //- Tôi luôn sẵn sàng chia sẻ kiến thức mới lạ lên knowledge book của công ty, cũng như chia sẻ, hướng dẫn trực tiếp, tận tình cho nhân viên mới. Điều đó giúp tăng năng lực của cả team.

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
