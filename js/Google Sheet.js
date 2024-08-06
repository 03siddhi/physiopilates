const scriptURL='https://script.google.com/macros/s/AKfycbw73OmGkWGmF6XbPkDFUggim7EK_0F5Auca0pGtOH60T_CIjvZmKO_-jdtT_EN7ETiIYA/exec'
const form=document.forms['contact-form']

form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{ method: 'POST' , body: new FormData(form)})
    .then(response=> alert("Thank you! your form is submitted successfully!"))
    .then(()=>{ window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
    
})