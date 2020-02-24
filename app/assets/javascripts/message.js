$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="chat-main__message-list--message" data-message-id=${message.id}>
         <div class="chat-main__message-list--message--up-side">
           <div class="chat-main__message-list--message--up-side--name">
             ${message.user_name}
           </div>
           <div class="chat-main__message-list--message--up-side--date">
             ${message.date}
           </div>
         </div>
         <div class="chat-main__message-list--message--content">
           <p class="chat-main__message-list--message--content--text">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="chat-main__message-list--message" data-message-id=${message.id}>
         <div class="chat-main__message-list--message--up-side">
           <div class="chat-main__message-list--message--up-side--name">
             ${message.user_name}
           </div>
           <div class="chat-main__message-list--message--up-side--date">
             ${message.date}
           </div>
         </div>
         <div class="chat-main__message-list--message--content">
           <p class="chat-main__message-list--message--content--text">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__message-list').append(html);  
    $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});    
    $('form')[0].reset();
  })
})
});