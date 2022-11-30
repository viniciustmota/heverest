const info = [

    {
        id: 0,
        nome: 'Terno Costume APA Slim <br> Cinza Chumbo New Uomo',
        codigo: 'R29-O46798',
        img: './IMG/roupas/ternos/1.jpg',
        quantidade: 0,
        valor_I: '800,00',
        preco: '650',
        desconto: '18',
        vezes: '4',
        valor_v: '200',
        a: './PAGINAS/COMPRAR/comprar.html',
        p_img1: '/IMG/roupas/ternos/2.jpg', 
        p_img2: '/IMG/roupas/ternos/3.jpg',
        p_img3: '/IMG/roupas/ternos/4.jpg',
        p_img4: '/IMG/roupas/ternos/5.jpg',
        p_img5: '/IMG/roupas/ternos/6.jpg'
    }



]

inicializarterno = () => {
    var containerTernos = document.getElementById('ternos');
    info.map((val)=>{
        containerTernos.innerHTML += `
        
        <div class="comprar-terno">
                <div class="imgs-pagina">
                    <img src="`+val.img+`" class="img" />
                    <div class="img_m">
                    <img class="img1" src="`+val.p_img1+`" />
                    <img class="img2" src="`+val.p_img2+`" />
                    <img class="img3" src="`+val.p_img3+`" />
                    <img class="img4" src="`+val.p_img4+`" />
                    <img class="img5" src="`+val.p_img5+`" />
                    </div>
                </div>
                
                <div class="info-terno">

                    <p class="nome-terno">`+val.nome+`</p>
                    <p class="codigo">`+val.codigo+`</p>
                    <p class="valor_I">R$ `+val.valor_I+`</p>
                    <div class="valores">
                        <p class="preco">R$ `+val.preco+`</p>
                        <p class="desconto">- `+val.desconto+`%</p>
                    </div>
                    <p class="vezes" >`+val.vezes+`x R$ `+val.valor_v+` sem juros</p>
                    <hr>

                    <div class="frase_t">
                        <div class="icon_t">
                            <i class="fa-solid fa-shirt"></i>
                            <i class="fa-solid fa-arrows-up-down"></i>
                        </div>
                        <p>Vereifique o seu tamanho</p>
                    </div>

                        <div class="tamanho">
                            <div class="escolha_t">

                            <input type="radio" name="medidas" id="item-1" class="medidas-input">
                                <label for="item-1" id="pp" class="pp">PP</label>
                                  
                            <input type="radio" name="medidas" id="item-2" class="medidas-input">
                                <label for="item-2" id="p" class="p">P</label>

                            <input type="radio" name="medidas" id="item-3" class="medidas-input">
                                <label for="item-3" id="m" class="m">M </label>
                            

                            <input type="radio" name="medidas" id="item-4" class="medidas-input">
                                <label for="item-4" id="g" class="g">G </label>
                            
                            <input type="radio" name="medidas" id="item-5" class="medidas-input">
                                <label for="item-5" id="gg" class="gg">GG</label>
            
                            </div>

                        </div>

                            <a href="`+val.a+`" class="btn-comprar"> 
                                <button>Comprar</button>
                            </a>

                        <div class="frete">
                            <div class="text-frete" title="Clique para confirmar o seu CEP">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>Confirme o seu endereço</p>
                            </div>

                                <section class="pag-cep">
                                    <div class="area-cep">
                                        <div class="form">
                                        <div class="cep-input">
                                            <input type="number" id="CEP" placeholder="Digite o seu CEP">
                                            <button id="Consultar" onclick="consutaEndereco()" class="consultar" >Consultar</button>
                                        </div>
                                            <div id="resultado">
                                                <p class="p-frete">Seu Resultado Aqui</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                        </div>

                        <div class="descricao">  
                            <h5>Material & Descrição</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio dicta accusantium neque? Reiciendis, sed voluptate culpa ad</p>
                        </div>
                    
                </div
        </div>
        
        `;

        //img1
        var imgAtual = "./IMG/roupas/ternos/1.jpg";
        var img = document.querySelector(".img").src = imgAtual;
        var img1 = document.querySelector(".img1");
        var srcIMG1 = "./IMG/roupas/ternos/2.jpg";
        

        img1.addEventListener("click",function(){
            document.querySelector(".img").src = imgAtual;
            imgAtual = srcIMG1;  
            img1.style.border = "2px solid black"; 

            img2.style.border = "none";
            img3.style.border = "none";
            img4.style.border = "none";
            img5.style.border = "none";
          });

        //img2
        var imgAtual = "./IMG/roupas/ternos/1.jpg";
        var img2 = document.querySelector(".img2");
        var srcIMG2 = "../IMG/roupas/ternos/3.jpg";
        var img = document.querySelector(".img").src = imgAtual;
       

        img2.addEventListener("click",function(){
            document.querySelector(".img").src = imgAtual;
            imgAtual = srcIMG2;
            img2.style.border = "2px solid black"; 

            img1.style.border = "none";
            img3.style.border = "none";
            img4.style.border = "none";
            img5.style.border = "none"; 
        });

        //img3
        var imgAtual = "./IMG/roupas/ternos/1.jpg";
        var img3 = document.querySelector(".img3");
        var srcIMG3 = "./IMG/roupas/ternos/4.jpg";
        var img = document.querySelector(".img").src = imgAtual;
         

        img3.addEventListener("click",function(){
            document.querySelector(".img").src = imgAtual;
            imgAtual = srcIMG3;
            img3.style.border = "2px solid black"; 

            img1.style.border = "none";
            img2.style.border = "none";
            img4.style.border = "none";
            img5.style.border = "none"; 
        });

        //img4
        var imgAtual = "./IMG/roupas/ternos/1.jpg";
        var img4 = document.querySelector(".img4");
        var srcIMG4 = "./IMG/roupas/ternos/5.jpg";
        
        img4.addEventListener("click",function(){
            document.querySelector(".img").src = imgAtual;
            imgAtual = srcIMG4;
            img4.style.border = "2px solid black"; 

            img1.style.border = "none";
            img2.style.border = "none";
            img3.style.border = "none";
            img5.style.border = "none"; 
        });

        //img5
        var imgAtual = "./IMG/roupas/ternos/1.jpg";
        var img5 = document.querySelector(".img5");
        var srcIMG5 = "./IMG/roupas/ternos/6.jpg";
        
        img5.addEventListener("click",function(){
            document.querySelector(".img").src = imgAtual;
            imgAtual = srcIMG5;
            img5.style.border = "2px solid black"; 

            img1.style.border = "none";
            img2.style.border = "none";
            img3.style.border = "none";
            img4.style.border = "none"; 
        });
    })
}

inicializarterno();

var textoCEP = document.querySelector(".text-frete");
var contCEP = document.querySelector(".pag-cep");
var descricao = document.querySelector(".descricao");
textoCEP.addEventListener('click', function(){
    if(contCEP.style.display === "none"){
        contCEP.style.display = "block";
    }else{
        contCEP.style.display = "none"
    }
})

