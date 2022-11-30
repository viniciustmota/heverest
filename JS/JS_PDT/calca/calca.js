const items = [
    {
        id: 0,
        nome: 'Calça Social Masculina Reta Alfaiatada Preta',
        img: './IMG/roupas/calca/1.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CALCA/GERAL/calca1.html',
        valor_I: '119,99',
        preco: '60',
        desconto: '50',
    },
    {
        id: 1,
        nome: 'Calça Social Moderna Elegante Trabalho Masculino Moda Verão',
        img: './IMG/roupas/calca/2.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CALCA/GERAL/calca2.html',
        valor_I: '211,08',
        desconto: '25',
        preco: '160',
    },
    {
        id: 2,
        nome: 'Calça Social masculina Color Areia',
        img: './IMG/roupas/calca/3.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CALCA/GERAL/calca3.html',
        valor_I: '0v',
        desconto: '0',
        preco: '250',
    },
    {
        id: 3,
        nome: 'Calça Social Masclina Em Microfibra',
        img: './IMG/roupas/calca/4.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CALCA/GERAL/calca4.html',
        valor_I: '99,99',
        desconto: '50',
        preco: '50',
    },
    {
        id: 4,
        nome: 'Calça Social Masculina Reta Alfaiatada Preta',
        img: './IMG/roupas/calca/5.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CALCA/GERAL/calca5.html',
        valor_I: '119,99',
        preco: '60',
        desconto: '50',
    },
    {
        id: 5,
        nome: 'Calça Social Moderna Elegante Trabalho Masculino Moda Verão',
        img: './IMG/roupas/calca/6.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CALCA/GERAL/calca6.html',
        valor_I: '211,08',
        desconto: '25',
        preco: '160',
    },
    {
        id: 6,
        nome: 'Calça Social masculina Color Areia',
        img: './IMG/roupas/calca/7.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CALCA/GERAL/calca7.html',
        valor_I: '0v',
        desconto: '0',
        preco: '250',
    },
    {
        id: 7,
        nome: 'Calça Social Masclina Em Microfibra',
        img: './IMG/roupas/calca/8.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/CALCA/GERAL/calca8.html',
        valor_I: '99,99',
        desconto: '50',
        preco: '50',
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

        items.map((val)=>{
            
            var sPreco = val.valor_I;
            var valor = document.querySelectorAll(".valor_I");
            var desc = document.querySelectorAll(".desconto");
            

            if(sPreco === "0v"){

                valor[3].style.display = "none";
                desc[3].style.display = "none"
            }

    })
