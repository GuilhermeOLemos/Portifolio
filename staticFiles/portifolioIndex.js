$(document).ready(function () {
    let ultimoElemento = null

    $('.lista-projetos-itens').click(function () {

        if (ultimoElemento !== this) {
            $(ultimoElemento).removeClass('projeto-selecionado')
            $(ultimoElemento).addClass('projeto-padrao')
        }

        $(this).removeClass('projeto-padrao')
        $(this).addClass('projeto-selecionado')

        ultimoElemento = this
    })



    $('.lista-projetos-itens').mouseleave(function () {
        $(this).removeClass('projeto-selecionado')
        $(this).addClass('projeto-padrao')
    })



    $('.menu-projetos-itens').click(function () {
        if (ultimoElemento !== this){
            $(ultimoElemento).toggleClass('menu-projetos-item-selecionado')
            $(this).toggleClass('menu-projetos-item-selecionado')
        }

        ultimoElemento = this

        let opcaoMenu = $(this).text()
        // alert(opcaoMenu)

        let alvoId = ''

        switch (opcaoMenu) {
            case 'Todos':
                alvoId = '#todos'
                break
            case 'Apps':
                alvoId = '#apps'
                break
            case 'Websites':
                alvoId = '#websites'
                break
            case 'Softwares':
                alvoId = '#softwares'
                break
            default:
                return
        }

        $(alvoId)[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
        
    })
})
