let type = new Typed('.text',{
    strings : ['Converter'],
    typeSpeed:100,
    backSpeed:100,
    loop:true,    
})

let speech = new SpeechSynthesisUtterance();
document.getElementById('listen').addEventListener('click',function(){
    speech.text = document.getElementById('area').value ;
    window.speechSynthesis.speak(speech)
})