var typed = new Typed('#element', {
    strings: ['B. TECH. Professional','Web Developer'],
    typeSpeed: 50,
  });
const scriptURL = 'https://script.google.com/macros/s/AKfycbyii0f16z-kHqGQ-v_k8dzfaTfP2TpmKUorCcXBIUuwjYSlQOVnzCz4-szD5Uw9bg5wVQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementsByClassName("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response=>{
            msg.innerHTML = "message sent successfully"
            alert("message sent successfully")
            setTimeout(function(){
                
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
        })