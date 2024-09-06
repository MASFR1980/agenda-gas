function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('AgendaGAS');
    
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById('1tQy6rnkTXgu9T7iqBGd9OFVVzCOP6L1usLTnSCYfJX4').getActiveSheet();
    let datos=hoja.getDataRange().getValues();
    return datos;
}