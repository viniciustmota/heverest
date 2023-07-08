const items = [
    {
        id: 0,
        nome: 'Camisa Social Masculina Slim Manga Longa Azul Marinho',
        img: './IMG/roupas/camisa/1.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CAMISA/GERAL/camisas1.html',
        valor_I: '0v',
        preco: '160',
        desconto: '18',
    },
    {
        id: 1,
        nome: 'Camisa Social Confort em Linho com Manga Longa Marrom',
        img: './IMG/roupas/camisa/2.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CAMISA/GERAL/camisas2.html',
        valor_I: '139,90',
        desconto: '15',
        preco: '118',
    },
    {
        id: 2,
        nome: 'Camisa Social Masculina Slim Azul Marinho - LEVOK',
        img: './IMG/roupas/camisa/3.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CAMISA/GERAL/camisas3.html',
        valor_I: '199,99',
        desconto: '33',
        preco: '134',
    },
    {
        id: 3,
        nome: 'Camisa Social Masculina Preta Lisa',
        img: './IMG/roupas/camisa/4.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CAMISA/GERAL/camisas4.html',
        valor_I: '79,99',
        desconto: '37',
        preco: '50',
    },   
    {
        id: 4,
        nome: 'Camisa Social Masculina Slim Manga Longa Azul Marinho',
        img: './IMG/roupas/camisa/5.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CAMISA/GERAL/camisas5.html',
        valor_I: '0v',
        preco: '160',
        desconto: '18',
    },
    {
        id: 5,
        nome: 'Camisa Social Confort em Linho com Manga Longa Marrom',
        img: './IMG/roupas/camisa/6.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CAMISA/GERAL/camisas6.html',
        valor_I: '139,90',
        desconto: '15',
        preco: '118',
    },
    {
        id: 6,
        nome: 'Camisa Social Masculina Slim Azul Marinho - LEVOK',
        img: './IMG/roupas/camisa/7.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CAMISA/GERAL/camisas7.html',
        valor_I: '199,99',
        desconto: '33',
        preco: '134',
    },
    {
        id: 7,
        nome: 'Camisa Social Masculina Preta Lisa',
        img: './IMG/roupas/camisa/8.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CAMISA/GERAL/camisas8.html',
        valor_I: '79,99',
        desconto: '37',
        preco: '50',
    },   

]

inicializarloja = () => {
    var containerProdutos = document.getElementById('produtos');

    items.map((val)=>{

        containerProdutos.innerHTML += `
        
        <div class="produto-single">
            <a href="`+val.a+`">
                <img src="`+val.img+`"/>
                <p class="nome-pdt">`+val.nome+`</p>

                <div class="preco-pdt">
                        <p class="valor_I">R$ `+val.valor_I+`</p>
                        <div class="preco-desc">
                            <p class="preco">R$ `+val.preco+`</p>
                            <p class="desconto">- `+val.desconto+`%</p>
                        </div>
                    </div>
            </a>
        </div>
        `;
        
    })
}

inicializarloja();

        items.map((val)=>{
            
            var sPreco = val.valor_I;
            var valor = document.querySelectorAll(".valor_I");
            var desc = document.querySelectorAll(".desconto");
            

            if(sPreco === "0v"){

                valor[0].style.display = "none";
                desc[0].style.display = "none"

            }

    })
