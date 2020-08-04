import ash from 'lodash'
var validatedMail = false
var validatedUsername = false
var as = this
$(document).ready(function () {
  $('#mailError').hide()
  $('#validEmail').hide()
  $('#nameError').hide()
  $('#validName').hide()
  $('#mail').on('input', function () {
    // console.log("input entered 1");
    const mail = $('#mail').val()
    if (mail.length <= 4) {
      $('#mailError').show()
      $('#validEmail').hide()
    } else {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      var validMail = regex.test(mail)
      if (!validMail) {
        console.log(validMail)
        $('#mailError').show()
        $('#validEmail').hide()
      } else {
        $('#mailError').hide('slow')
        $('#validEmail').show()
        as.validatedMail = true
      }
    }
  })
  $('#username').on('input', function () {
    // console.log("input entered 3");
    const userName = $('#username').val()
    if (userName.length < 4) {
      $('#nameError').show()
      $('#validName').hide()
    } else {
      $('#nameError').hide()
      $('#validName').show()
      as.validatedUsername = true
    }
  })
})

function registerUser () {
  event.preventDefault()
  if (as.validatedUsername && as.validatedMail) {
    const email = $('#mail').val()
    const username = $('#username').val()
    const newTag = ash.split(email, '@')
    let finalTag = ash.split(newTag[0], '.')
    if (finalTag.length > 1) {
      finalTag = finalTag[0] + ' ' + finalTag[1]
    } else {
      finalTag = finalTag[0]
    }
    const payload = {
      email,
      username,
      tagName: finalTag
    }
    console.log(payload)
  } else {
    console.log(as.validatedUsername)
    console.log(as.validatedMail)
  }
}
