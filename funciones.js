function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('AgendaGAS');
    
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}