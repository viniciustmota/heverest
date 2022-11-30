var btn = document.getElementById('botao');
var container = document.querySelector('.container');
btn.addEventListener('mouseover',function(){
    if (container.style.display === 'block'){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }
})
