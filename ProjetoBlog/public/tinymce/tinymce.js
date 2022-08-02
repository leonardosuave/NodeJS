tinymce.init({
    language: 'pt_BR',
    selector: "#article",
    activeEditor: true,
    plugins: [
        'advlist', 'autolink', 'link', 'image', 'lists', 'preview', 'searchreplace', 'wordcount', 'fullscreen', 'insertdatetime', 'media', 'save', 'table', 'emoticons',
    ],
    init_instance_callback: () => { //É executado toda vez que o editor for carregado.
        tinymce.get('article').setContent($('#content').html())
    }
    
})