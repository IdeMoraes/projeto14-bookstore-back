import {db} from "./../dbStrategy/mongo.js";

export async function carregarProdutos(req,res){
/*     const catalogo=[
        {
            idDoLivro: 1,
            titulo: 'Memórias Póstumas de Brás Cubas',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Memorias-Postumas-300x500.jpeg.webp',
            autor: 'Machado de Assis',
            preco: 53.45,
            descricao: 'Uma desconstrução do Brasil, por meio da ironia, que escancara a hipocrisia da nossa elite dirigente no século 19. Machado de Assis dá voz a um narrador defunto que, longe da vida social, pode zombar do caráter das pessoas com quem conviveu. O romance também é importante por se valer de novas técnicas narrativas, fazendo-se a obra mais inovadora daquele século.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 2,
            titulo: 'Recordações do Escrivão Isaías Caminha',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Recordacoes-do-Escrivao-Isaias-Caminha-300x462.jpg.webp',
            autor: 'Lima Barreto',
            preco: 87.65,
            descricao: 'É a obra que faz a passagem da língua mais formal, de matriz lusitana, para a linguagem quente das ruas, que representa os seres marginais em um Rio de Janeiro que sonha com a modernidade. Aqui, Lima Barreto acompanha o drama de um mulato inteligente, que é violentamente discriminado por sua cor, o que o autor promove é uma naturalização da linguagem para dar espessura humana a atores sociais que nunca haviam sido protagonistas na literatura brasileira.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 3,
            titulo: 'O Ateneu',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/O-Ateneu-300x501.jpg.webp',
            autor: 'Raul Pompeia',
            preco: 47.65,
            descricao: 'É o precursor da autoficção, um romance carregadamente autobiográfico, centrado nas desilusões do menino Sérgio em um colégio que era tido como o melhor o país. Ele descobre a falsidade e os comportamentos sórdidos de um mundo onde não há lugar para o amor e a amizade. Escrito com um cuidado de poeta parnasiano, este é o romance brasileiro em que a linguagem literária chegou ao seu ápice.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 4,
            titulo: 'Macunaíma',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Macunaima-300x467.jpg.webp',
            autor: 'Mário de Andrade',
            preco: 77.35,
            descricao: 'O mais divertido retrato do Brasil como um país que vive contemporaneamente em todas as idades do continente, no período pré-cabralino, no Brasil dos viajantes estrangeiros, na Colônia, no Império e na modernidade. O grande feito do livro é transformar as características do homem nacional tidas como defeitos em elementos positivos de nossa identidade malandra, ao mesmo tempo em que elege a pilhagem nos documentos como uma forma de invenção selvagem.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 5,
            titulo: 'Vidas Secas',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Vidas-Secas-300x422.jpg.webp',
            autor: 'Graciliano Ramos',
            preco: 53.35,
            descricao: 'Um romance montado com cenas avulsas, a partir de quadros, em que Graciliano Ramos acompanha a rotina desesperadora de nordestinos que vivem de fazenda em fazenda, isolados do mundo. Fabiano e Sinhá Vitória têm que tomar uma decisão crucial, eternizar este ciclo de exploração ou tentar dar aos filhos o estudo que eles nunca tiveram. Mais do que um romance sobre a seca e o nordeste, é uma narrativa sobre o poder da linguagem.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 6,
            titulo: 'Fogo Morto',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Fogo-Morto-300x459.jpg.webp',
            autor: 'José Lins do Rego',
            preco: 36.37,
            descricao: 'É a obra máxima do Ciclo da Cana de Açúcar, construída com recursos narrativos modernos, longe da memorialística de outros livros do autor. Em “Fogo Morto” ele transforma em mito e em fantasmagoria o fim de um período colonial da história do Brasil, mostrando a falência do modelo social dos engenhos, do qual ele se sente órfão. Aqui, a matéria nordestina ganha uma estrutura narrativa de planos que se sobrepõem, condensando todo um tempo.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 7,
            titulo: 'Grande Sertão: Veredas',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Grande-Sertao-Veredas-300x452.jpg.webp',
            autor: 'Guimarães Rosa',
            preco: 23.53,
            descricao: 'Verdadeira enciclopédia do Sertão, este romance avança barrocamente para todos os lados, mostrando um narrador sertanejo que usa filosoficamente a linguagem, modificando-a para tentar dar vazão aos seus questionamentos interiores. Riobaldo narra para nos e para se convencer de sua inocência em relação a três episódios centrais: o pacto que ele teria feito com o diabo, o fato de amar em Diadorim (a guerreira travestida de jagunço) a mulher e não o homem e as mortes que ele comete na jagunçagem.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 8,
            titulo: 'A Paixão Segundo GH',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/A-Paixao-Segundo-GH-300x453.jpg.webp',
            autor: 'Clarice Lispector',
            preco: 36.43,
            descricao: 'É o livro mais importante de Clarice Lispector, marcado por uma estrutura solta, que não tem começo nem fim — inicia e termina com reticências. O que o leitor acompanha é parte dos intermináveis questionamentos de uma narradora atormentada pela necessidade de se conhecer, ampliando metaforicamente o eu e o agora até os primórdios da vida no planeta.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 9,
            titulo: 'O Coronel e o Lobisomem',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/O-Coronel-e-o-Lobisomem--300x450.jpg.webp',
            autor: 'José Cândido de Carvalho',
            preco: 47.62,
            descricao: 'Ambientado no litoral carioca, este romance coloca em cena um narrador mentiroso, que gosta de contar vantagem, mas que revela, em cada episódio, a sua ingenuidade de roceiro. O coronel que acreditava em lobisomem é completamente enganado por figuras urbanas, cifrando o fim deste mundo mítico, que não tem mais continuidade no presente. Aqui, a linguagem sertaneja ganha um colorido deslumbrante para cifrar o descompasso deste mundo.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 10,
            titulo: 'A Pedra do Reino',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/A-Pedra-do-Reino-300x448.jpg.webp',
            autor: 'Ariano Suassuna',
            preco: 36.12,
            descricao: 'Obra monumental, de incorporação da cultura popular, que se apresenta programaticamente inconclusa, na qual o narrador, preso por seu envolvimento com um episódio trágico do sertão (a degola de animais e pessoas para instaurar o Império da Pedra do Reino) constrói o romance como uma peça de defesa, tentando nos convencer de sua inocência. Farsa e fanatismo dão a tônica ao romance.',
            quantidadeEmEstoque: 50
        }  
    ]; */

    try {
        const {authorization} = req.headers;
        const token = authorization?.replace("Bearer", "").trim();
        if (await db.collection("sessions").findOne({token})) {
            const catalogo = await db.collection("catalogo").find({}).toArray();
            return res.send(catalogo)
        }
        else return res.status(422).send("deu erro");
    } catch (error) {
        return res.status(500).send(error)
    }
}

export async function postProdutos(req,res){
    const catalogo=[
        {
            idDoLivro: 1,
            titulo: 'Memórias Póstumas de Brás Cubas',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Memorias-Postumas-300x500.jpeg.webp',
            autor: 'Machado de Assis',
            preco: 53.45,
            descricao: 'Uma desconstrução do Brasil, por meio da ironia, que escancara a hipocrisia da nossa elite dirigente no século 19. Machado de Assis dá voz a um narrador defunto que, longe da vida social, pode zombar do caráter das pessoas com quem conviveu. O romance também é importante por se valer de novas técnicas narrativas, fazendo-se a obra mais inovadora daquele século.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 2,
            titulo: 'Recordações do Escrivão Isaías Caminha',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Recordacoes-do-Escrivao-Isaias-Caminha-300x462.jpg.webp',
            autor: 'Lima Barreto',
            preco: 87.65,
            descricao: 'É a obra que faz a passagem da língua mais formal, de matriz lusitana, para a linguagem quente das ruas, que representa os seres marginais em um Rio de Janeiro que sonha com a modernidade. Aqui, Lima Barreto acompanha o drama de um mulato inteligente, que é violentamente discriminado por sua cor, o que o autor promove é uma naturalização da linguagem para dar espessura humana a atores sociais que nunca haviam sido protagonistas na literatura brasileira.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 3,
            titulo: 'O Ateneu',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/O-Ateneu-300x501.jpg.webp',
            autor: 'Raul Pompeia',
            preco: 47.65,
            descricao: 'É o precursor da autoficção, um romance carregadamente autobiográfico, centrado nas desilusões do menino Sérgio em um colégio que era tido como o melhor o país. Ele descobre a falsidade e os comportamentos sórdidos de um mundo onde não há lugar para o amor e a amizade. Escrito com um cuidado de poeta parnasiano, este é o romance brasileiro em que a linguagem literária chegou ao seu ápice.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 4,
            titulo: 'Macunaíma',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Macunaima-300x467.jpg.webp',
            autor: 'Mário de Andrade',
            preco: 77.35,
            descricao: 'O mais divertido retrato do Brasil como um país que vive contemporaneamente em todas as idades do continente, no período pré-cabralino, no Brasil dos viajantes estrangeiros, na Colônia, no Império e na modernidade. O grande feito do livro é transformar as características do homem nacional tidas como defeitos em elementos positivos de nossa identidade malandra, ao mesmo tempo em que elege a pilhagem nos documentos como uma forma de invenção selvagem.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 5,
            titulo: 'Vidas Secas',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Vidas-Secas-300x422.jpg.webp',
            autor: 'Graciliano Ramos',
            preco: 53.35,
            descricao: 'Um romance montado com cenas avulsas, a partir de quadros, em que Graciliano Ramos acompanha a rotina desesperadora de nordestinos que vivem de fazenda em fazenda, isolados do mundo. Fabiano e Sinhá Vitória têm que tomar uma decisão crucial, eternizar este ciclo de exploração ou tentar dar aos filhos o estudo que eles nunca tiveram. Mais do que um romance sobre a seca e o nordeste, é uma narrativa sobre o poder da linguagem.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 6,
            titulo: 'Fogo Morto',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Fogo-Morto-300x459.jpg.webp',
            autor: 'José Lins do Rego',
            preco: 36.37,
            descricao: 'É a obra máxima do Ciclo da Cana de Açúcar, construída com recursos narrativos modernos, longe da memorialística de outros livros do autor. Em “Fogo Morto” ele transforma em mito e em fantasmagoria o fim de um período colonial da história do Brasil, mostrando a falência do modelo social dos engenhos, do qual ele se sente órfão. Aqui, a matéria nordestina ganha uma estrutura narrativa de planos que se sobrepõem, condensando todo um tempo.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 7,
            titulo: 'Grande Sertão: Veredas',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/Grande-Sertao-Veredas-300x452.jpg.webp',
            autor: 'Guimarães Rosa',
            preco: 23.53,
            descricao: 'Verdadeira enciclopédia do Sertão, este romance avança barrocamente para todos os lados, mostrando um narrador sertanejo que usa filosoficamente a linguagem, modificando-a para tentar dar vazão aos seus questionamentos interiores. Riobaldo narra para nos e para se convencer de sua inocência em relação a três episódios centrais: o pacto que ele teria feito com o diabo, o fato de amar em Diadorim (a guerreira travestida de jagunço) a mulher e não o homem e as mortes que ele comete na jagunçagem.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 8,
            titulo: 'A Paixão Segundo GH',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/A-Paixao-Segundo-GH-300x453.jpg.webp',
            autor: 'Clarice Lispector',
            preco: 36.43,
            descricao: 'É o livro mais importante de Clarice Lispector, marcado por uma estrutura solta, que não tem começo nem fim — inicia e termina com reticências. O que o leitor acompanha é parte dos intermináveis questionamentos de uma narradora atormentada pela necessidade de se conhecer, ampliando metaforicamente o eu e o agora até os primórdios da vida no planeta.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 9,
            titulo: 'O Coronel e o Lobisomem',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/O-Coronel-e-o-Lobisomem--300x450.jpg.webp',
            autor: 'José Cândido de Carvalho',
            preco: 47.62,
            descricao: 'Ambientado no litoral carioca, este romance coloca em cena um narrador mentiroso, que gosta de contar vantagem, mas que revela, em cada episódio, a sua ingenuidade de roceiro. O coronel que acreditava em lobisomem é completamente enganado por figuras urbanas, cifrando o fim deste mundo mítico, que não tem mais continuidade no presente. Aqui, a linguagem sertaneja ganha um colorido deslumbrante para cifrar o descompasso deste mundo.',
            quantidadeEmEstoque: 50
        },
        {
            idDoLivro: 10,
            titulo: 'A Pedra do Reino',
            imagem: 'https://www.revistabula.com/wp/wp-content/uploads/2016/10/A-Pedra-do-Reino-300x448.jpg.webp',
            autor: 'Ariano Suassuna',
            preco: 36.12,
            descricao: 'Obra monumental, de incorporação da cultura popular, que se apresenta programaticamente inconclusa, na qual o narrador, preso por seu envolvimento com um episódio trágico do sertão (a degola de animais e pessoas para instaurar o Império da Pedra do Reino) constrói o romance como uma peça de defesa, tentando nos convencer de sua inocência. Farsa e fanatismo dão a tônica ao romance.',
            quantidadeEmEstoque: 50
        }  
    ]
    
    try {
        catalogo.map(async (item)=>{await db.collection("catalogo").insertOne({item})})
        const listaprod = await db.collection("catalogo").find({}).toArray()
        res.status(200).send(listaprod)
    } catch (error) {
        res.status(500).send()
    }
}