const items = [
    {
        id: 0,
        nome: 'Terno Costume APA Slim Cinza Chumbo New Uomo',
        img: './IMG/roupas/sapatos/1.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/SAPATOS/GERAL/sapatos1.html',
        valor_I: '800,00',
        preco: '650',
        desconto: '18',
    },
    {
        id: 1,
        nome: 'Terno 1',
        img: './IMG/roupas/sapatos/2.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/SAPATOS/GERAL/sapatos2.html',
        valor_I: '0',
        desconto: '0',
        preco: '0',
    },
    {
        id: 2,
        nome: 'Terno 2',
        img: './IMG/roupas/sapatos/3.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/SAPATOS/GERAL/sapatos3.html',
        valor_I: '0',
        desconto: '0',
        preco: '0',
    },
    {
        id: 3,
        nome: 'Terno 3',
        img: './IMG/roupas/sapatos/4.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/SAPATOS/GERAL/sapatos4.html',
        valor_I: '0',
        desconto: '0',
        preco: '0',
    },
    {
        id: 4,
        nome: 'Terno 4',
        img: './IMG/roupas/sapatos/5.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/SAPATOS/GERAL/sapatos5.html',
        valor_I: '0',
        desconto: '0',
        preco: '0',
    },
    {
        id: 5,
        nome: 'Terno 5',
        img: './IMG/roupas/sapatos/6.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/SAPATOS/GERAL/sapatos6.html',
        valor_I: '0',
        desconto: '0',
        preco: '0',
    },
    {
        id: 6,
        nome: 'Terno 5',
        img: './IMG/roupas/sapatos/7.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/SAPATOS/GERAL/sapatos7.html',
        valor_I: '0',
        desconto: '0',
        preco: '0',
    },
    {
        id: 7,
        nome: 'Terno 5',
        img: './IMG/roupas/sapatos/8.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/SAPATOS/GERAL/sapatos8.html',
        valor_I: '0',
        desconto: '0',
        preco: '0',
    }

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