tinymce.init({
    language: 'pt_BR',
    selector: '#article',
    activeEditor: true,
    plugins: [
        'advlist', 'autolink', 'link', 'image', 'lists', 'print', 'preview', 'hr', 'searchplace', 'wordcount', 'fullscreen', 'insertdatetime', 'media', 'save', 'table', 'paste', 'emoticons'
    ],
    init_instance_callback: () => { //É executado toda vez que o editor for carregado.
        tinymce.get('article').setContent($('#content').html())
    }
    
})